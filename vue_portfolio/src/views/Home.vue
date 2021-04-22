<template>
  <main class="main">
    <div class="hero">
      <div class="code-img">
        <!-- <img src="../assets/code.png" alt="" />
          <div class="hr"></div> -->
      </div>

      <div class="brackets-img">
        <!-- <img src="../assets/brackets.png" alt="" />
        <div class="hr"></div> -->
      </div>

      <div class="hero-title">
        <h1>Charlie Morris</h1>
        <!-- <div class="hr"></div> -->
      </div>
      <div class="hero-img">
        <img
          src="https://avatars.githubusercontent.com/u/67357037?v=4"
          alt=""
        />
      </div>
      <div class="hero-icons">
        <div class="hero-icons--linkedin">
          <i class="fab fa-linkedin linkedin"></i>
        </div>
        <div class="hero-icons--github github">
          <i class="fab fa-github-square"></i>
        </div>
      </div>
      <div class="hero-tagline">
        <p>Front End Web Developer</p>
        <p>Web Designer</p>
        <p>UI/UX Developer</p>
      </div>
      <div class="hero-btns">
        <router-link to="/projects">
          <main-btn>View My Work</main-btn>
        </router-link>
        <router-link to="/contact">
          <main-btn class="outline">Contact Me</main-btn>
        </router-link>
      </div>
    </div>
    <home-about />
    <home-skills />
  </main>
</template>

<script>
import HomeAbout from "../components/HomeAbout.vue";
import HomeSkills from "../components/HomeSkills.vue";
export default {
  components: {
    HomeAbout,
    HomeSkills,
  },
};
</script>

<style lang="scss" scoped>
.v-enter-from {
  opacity: 0;
}

.v-enter-active {
  opacity: 0.5;
  transition: all 0.5s ease-in;
}

.v-enter-to {
  opacity: 1;
}
.main {
  margin-top: 92px;
  margin-top: 64px;
  margin-top: 48px;

  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    // background: linear-gradient(120deg, #c8f7c5, #fff);
    .hr {
      width: 64px;
      height: 6px;
      margin: 12px auto;
      background: green;
      background: linear-gradient(
        120deg,
        rgba(60, 247, 60, 0.4),
        rgba(0, 38, 39, 0.4)
      );
      clip-path: polygon(100% 0, 99% 2%, 52% 99%, 0 3%, 0 0);
    }

    .brackets-img {
      position: absolute;
      right: 12%;
      // right: 18%;
      top: 120px;
      top: 160px;
      top: 200px;

      img {
        width: 105px;
        // width: 900px;
        // width: 140px;
        // width: 180px;
        // width: 225px;
      }
    }

    .code-img {
      position: absolute;
      left: 11%;
      // left: 18%;
      top: 120px;
      top: 160px;
      top: 200px;
      top: 0;
      left: 310px;
      left: 180px;
      img {
        width: 120px;
        width: 1440px;
        opacity: 0.6;
        // width: 165px;
        // width: 225px;
        // width: 2px;
      }
    }
    &-img {
      img {
        width: 350px;
        height: 350px;
        border: 12px solid #152a23;
        border-radius: 50%;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.35);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.35);
      }
    }

    &-title {
      // margin-top: 24px;
      margin-bottom: 24px;
      margin-bottom: 24px;
      margin-bottom: 16px;
      h1 {
        font-size: 48px;
        font-size: 62px;

        font-weight: 400;
        font-weight: 500;
        letter-spacing: 4px;
        color: hsl(129, 82%, 40%);
        color: #12ba2b;
        color: #0e8b21;
        color: hsl(129, 82%, 30%);

        font-family: "Rock Salt", cursive;
      }

      .hr {
        width: 92px;
        height: 8px;
        margin: 8px auto;
        background: green;
        background: linear-gradient(120deg, #3cf73c, #002627);
        clip-path: polygon(100% 0, 99% 2%, 52% 99%, 0 3%, 0 0);
      }
    }
    &-icons {
      display: flex;
      font-size: 32px;
      margin-top: 20px;
      &--linkedin {
        margin-right: 16px;

        .fab {
          color: #0a66c2;
        }
      }
      &--github {
        .fab {
          color: #4078c0;
        }
      }
    }
    &-tagline {
      margin-top: 16px;
      margin-top: 24px;
      margin-bottom: 24px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;

      p {
        color: #555;
        font-weight: 500;
        font-weight: 600;
      }
    }
    &-btns {
      margin-top: 16px;
      display: flex;
      justify-content: center;

      button {
        &:first-of-type {
          margin-right: 24px;
        }
      }
    }
  }
}
</style>
