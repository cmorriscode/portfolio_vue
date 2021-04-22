<template>
  <button>
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
button {
  padding: 16px 48px;
  background: #12ba2b;
  // background: #550000;
  // background: #3c1362;
  color: #fff;
  border: none;
  font-size: 16px;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
  display: inline-block;
  // box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
  transition: all 0.3s;
  border: 2px solid transparent;

  &:hover {
    // transform: translate(0, -2px);
    // box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    color: #12ba2b;
    border: 2px solid #12ba2b;
  }
  &.outline {
    background: #fff;
    color: #12ba2b;
    border: 2px solid #12ba2b;
    box-shadow: none;

    &:hover {
      background: #12ba2b;
      color: #fff;
    }
  }
}
</style>
