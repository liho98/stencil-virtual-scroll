import { Component, h, Prop, State, Element, ComponentInterface, Host } from '@stencil/core';

@Component({
  tag: 'virtual-scroll',
  styleUrl: 'virtual-scroll.css',
  shadow: false
})
export class VirtualScroll implements ComponentInterface {

  @Prop({ mutable: true }) height: number = 0;
  @Prop() rowCount: number = 0;
  @Prop() rowHeight: number = 0;
  @Prop() rowRenderer: any;
  @Prop() renderAhead: number = 1;
  @Prop() target: string = "default";
  @Prop() type: string = "div";
  @Prop() onScrollReachedBottom: { () };

  @State() scrollTop: number = 0;

  @Element() el: HTMLElement;

  private visibleRowCount: number = 0;

  constructor() {
    this.handleScrollBindComponent = this.handleScrollBindComponent.bind(this)
    this.handleScrollBindWindow = this.handleScrollBindWindow.bind(this)
  }

  handleScrollBindWindow(e) {
    requestAnimationFrame(() => {
      const { scrollTop, scrollHeight } = e.target.scrollingElement as any
      // scroll direction down
      if (scrollTop > this.scrollTop) {
        if (scrollTop >= (scrollHeight - (this.visibleRowCount * this.rowHeight))) {
          this.onScrollReachedBottom();
        }
      }
      // console.log("handleScrollWindow", e.target.scrollingElement.scrollTop, scrollHeight - (this.visibleRowCount * this.rowHeight))
      this.scrollTop = e.target.scrollingElement.scrollTop
    });
  }

  handleScrollBindComponent(e) {
    requestAnimationFrame(() => {
      const { scrollTop, scrollHeight } = e.target as any
      // scroll direction down
      if (scrollTop > this.scrollTop) {
        if (scrollTop >= (scrollHeight - 357)) {
          this.onScrollReachedBottom();
        }
      }
      this.scrollTop = e.target.scrollTop
    });
  }

  componentWillLoad() {
    this.scrollTop = this.el.scrollTop;

    if (this.target === "default") {
      this.el.addEventListener('scroll', this.handleScrollBindComponent)
    } else {
      this.height = window.innerHeight;
      window.addEventListener('scroll', this.handleScrollBindWindow)
    }
  }

  disconnectedCallback() {
    this.el.removeEventListener('scroll', this.handleScrollBindComponent)
    console.log("disconnectedCallback")
  }

  render() {
    const totalHeight = this.rowCount * this.rowHeight;

    let startNode = Math.floor(this.scrollTop / this.rowHeight) - this.renderAhead;
    startNode = Math.max(0, startNode);

    this.visibleRowCount = Math.ceil(this.height / this.rowHeight) + 2 * this.renderAhead;
    this.visibleRowCount = Math.min(this.rowCount - startNode, this.visibleRowCount);

    const offsetY = startNode * this.rowHeight;

    const RowRenderer = this.rowRenderer;

    const VisibleRow = () =>
      new Array(this.visibleRowCount)
        .fill(null)
        .map((_, index) => (
          <RowRenderer index={index + startNode} />
        ))

    const HTMLTypeRender = () => {
      switch (this.type) {
        case "table":
          return <table class="w-full"
            style={{
              willChange: "transform",
              transform: `translateY(${offsetY}px)`
            }}><VisibleRow /></table>;
        default:
          return <div class="w-full"
            style={{
              willChange: "transform",
              transform: `translateY(${offsetY}px)`
            }}><VisibleRow /></div>
      }
    }

    return (
      <Host class="block" style={{ height: `${this.target === "default" ? `${this.height}px` : "auto"}`, overflow: "hidden auto" }}>
        <div
          class="viewport"
          style={{
            overflow: "hidden",
            willChange: "transform",
            height: `${totalHeight}px`,
          }}
        >
          <HTMLTypeRender >
          </HTMLTypeRender>
        </div>
      </Host>
    );
  }
}