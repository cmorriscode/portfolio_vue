<template>
  <footer class="footer">
    <p>Designed and Developed by Charlie Morris</p>
    <p>&copy; {{ year }}</p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  padding: 32px 12px 24px;
  border-top: 4px solid #2b2b2b;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #f2f1ef;
  background: #fefefe;
  margin-top: auto;
  p {
    &:first-of-type {
      color: #0e8b21;
      color: hsl(129, 82%, 40%);
      margin-bottom: 12px;
    }
    &:last-of-type {
      color: #777;
    }
  }
}
</style>
