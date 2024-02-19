
import { init } from 'snabbdom';
import { h } from 'snabbdom';
import { classModule } from 'snabbdom';
import { propsModule } from 'snabbdom';
import { styleModule } from 'snabbdom';
import { eventListenersModule } from 'snabbdom';

const patch = init([classModule, propsModule, styleModule, eventListenersModule]);


export function createTemplate(state, props) {
  return h('div', { props: { className: 'container' } }, [
    h('h1', state.count),
    h('button', { on: { click: () => props.onClick() } }, 'Add')
  ]);
}


export function updateState(newState, oldVNode, vnode) {
  vnode.data = vnode.data || {};
  vnode.data.state = newState;
  const newVNode = createTemplate(newState, vnode.data.props);
  patch(oldVNode, newVNode);
}

export function mountComponent(callback) {
  document.addEventListener('DOMContentLoaded', callback);
}
