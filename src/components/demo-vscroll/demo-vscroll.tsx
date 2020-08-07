import { Component, ComponentInterface, Host, h, State } from '@stencil/core';

@Component({
  tag: 'demo-vscroll',
  styleUrl: 'demo-vscroll.css',
  shadow: false,
})
export class DemoVscroll implements ComponentInterface {
  @State() rowCount: number = 100;

  render() {
    const TestRow = ({ index }) => {
      return (
        <tr>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <div class="text-sm leading-5 font-medium text-gray-900">
              {index}
            </div>
          </td>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <div class="text-sm leading-5 font-medium text-gray-900">
              Rm 129.80
          </div>
          </td>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <div class="text-sm leading-5 text-gray-900">Boost</div>
          </td>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <span class="bg-green-100 text-green-800 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4">
              Success
            </span>
          </td>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
            One Utama
        </td>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
            3 mins ago
        </td>
          <td
            class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
            <a href="#" class="text-indigo-600 hover:text-indigo-900">View</a>
          </td>
        </tr>
      );
    };


    return (
      <virtual-scroll target="window" type="table" rowCount={this.rowCount} height={300} rowHeight={56} rowRenderer={TestRow} onScrollReachedBottom={() => {
        this.rowCount += 20;
        console.log("reached bottom")
      }}>
      </virtual-scroll>
    );
  }

}
