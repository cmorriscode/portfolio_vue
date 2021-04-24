<template>
  <main class="main">
    <div class="container">
      <div class="contact">
        <div class="contact-header">
          <h1>Contact</h1>
        </div>
        <div class="contact-text">
          <p>
            Thanks for viewing my site! I'd love to hear from you. Want to
            collaborate, connect, or provide any feedback? Great. Please get in
            touch with me through email at
            <span>{{ email }}</span
            >.
          </p>
        </div>

        <div class="logo-img">
          <img src="../assets/logo_v3.png" alt="" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      email: "cmorriscode@gmail.com",
    };
  },
};
</script>

<style lang="scss" scoped>
.main {
  margin-top: 48px;

  .container {
    max-width: 1280px;
    margin: 0 auto;
  }

  .contact {
    padding: 0px 24px 48px;
    &-header {
      margin-bottom: 32px;
      h1 {
        font-family: "Rock Salt", cursive;
        font-size: 48px;
        font-weight: 400;
        letter-spacing: 2px;
        color: #ffd700;
        color: #0e8b21;
        color: #00ff00;
        color: #3c1362;
      }
    }
    &-text {
      p {
        font-size: 22px;
        color: #444;

        span {
          color: #0e8b21;
        }
      }
    }

    .logo-img {
      display: flex;
      justify-content: center;
      padding: 48px 24px;
      img {
        width: 720px;
        max-width: 100%;
      }
    }
  }
}

@media (max-width: 720px) {
  .main {
    .contact {
      &-header {
        h1 {
          font-size: 32px;
          font-weight: 400;
          letter-spacing: 2px;
          color: #ffd700;
          color: #0e8b21;
          color: #00ff00;
          color: #3c1362;
        }
      }
      &-text {
        p {
          font-size: 18px;
        }
      }
    }
  }
}
</style>
