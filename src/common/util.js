/**
 * 判断是否方法
 * @param {Array} obj
 * @return {Boolean} bool
 */
function isFunction(obj) {
  return Object.prototype.toString.call(obj) === '[object Function]';
}

/**
 * 判断是否数组对象
 * @param {Array} obj
 * @return {Boolean} bool
 */
function isArray(obj) {
  return Array.isArray(obj);
}

/**
 * 暂时先放这里
 * 不考虑用core-js等类库，原因：
 * 1. 这种类库会增加Array.prototype.includes，引用后如果哪天去掉了，但是如果被外部直接使用时就会有坑
 * @param {Array} arr 数组对象
 * @param {Object} item 数组元素
 * @return {Boolean} bool 是否存在
 */
function arrayIncludes(arr, item) {
  const len = arr.length;
  let i = 0;
  while (i < len) {
    if (arr[i] === item) {
      return true;
    }
    i++;
  }
  return false;
}

/**
 * 过滤对象不需要的字段
 * @param {Array} filterKeys 需要过滤的key
 * @param {Object} originObject 原始对象
 * @return {Object} buildObject 返回的新对象
 */
function filterObjectKey(originObject, filterKeys) {
  const buildObject = {};
  const keys = Object.keys(originObject).filter(key => filterKeys.indexOf(key) === -1);
  if (!keys.length) {
    return null;
  }
  keys.forEach((key) => {
    buildObject[key] = originObject[key];
  });
  return buildObject;
}

import React from 'react';

function computeWidth(node) {
  const totalWidth = parseInt(getComputedStyle(node).width, 10);
  const padding =
    parseInt(getComputedStyle(node).paddingLeft, 10) +
    parseInt(getComputedStyle(node).paddingRight, 10);
  return totalWidth - padding;
}

function getAutoWidth(n) {
  if (!n) {
    return 0;
  }

  let node = n;

  let width = computeWidth(node);

  while (!width) {
    node = node.parentNode;
    if (node) {
      width = computeWidth(node);
    } else {
      break;
    }
  }

  return width;
}

const autoWidth = (WrappedComponent) => {
  return class extends React.Component {
    state = {
      computedWidth: 0,
    };

    componentDidMount() {
      const { width } = this.props;
      if (!width) {
        const w = getAutoWidth(this.root);
        // eslint-disable-next-line
        this.setState({ computedWidth: w });
      }
    }

    handleRoot = (node) => {
      this.root = node;
    };

    render() {
      const { width } = this.props;
      const { computedWidth } = this.state;
      const w = width || computedWidth;
      console.log('currentWidth', w);
      return (
        <div ref={this.handleRoot}>{w > 0 && <WrappedComponent {...this.props} width={w} />}</div>
      );
    }
  };
};

export default {
  isFunction,
  isArray,
  arrayIncludes,
  filterObjectKey,
  autoWidth
};
