<template>
  <main class="main">
    <div class="hero">
      <div class="hero-title">
        <h1>Charlie Morris</h1>
      </div>
      <div class="hero-img">
        <img src="https://avatars.githubusercontent.com/u/67357037?v=4" alt />
      </div>
      <div class="hero-icons">
        <div class="hero-icons--linkedin">
          <a href="https://www.linkedin.com/in/cmorriscode/">
            <i class="fab fa-linkedin linkedin"></i>
          </a>
        </div>
        <div class="hero-icons--github github">
          <a href="https://github.com/cmorriscode">
            <i class="fab fa-github-square"></i>
          </a>
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
.main {
  margin-top: 48px;

  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    .hr {
      width: 64px;
      height: 6px;
      margin: 12px auto;

      background: linear-gradient(
        120deg,
        rgba(60, 247, 60, 0.4),
        rgba(0, 38, 39, 0.4)
      );
      clip-path: polygon(100% 0, 99% 2%, 52% 99%, 0 3%, 0 0);
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
      margin-bottom: 16px;
      h1 {
        font-size: 62px;

        font-weight: 500;
        letter-spacing: 4px;

        color: hsl(129, 82%, 30%);

        font-family: "Rock Salt", cursive;
      }

      .hr {
        width: 92px;
        height: 8px;
        margin: 8px auto;

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
          cursor: pointer;
          color: #0a66c2;
        }
      }
      &--github {
        .fab {
          cursor: pointer;
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

        font-weight: 600;
      }
    }
    &-btns {
      margin-top: 16px;
      display: flex;
      justify-content: center;

      a {
        &:first-of-type {
          margin-right: 24px;
        }
      }
    }
  }
}

@media (max-width: 720px) {
  .main {
    margin-top: 48px;

    .hero {
      .hr {
      }

      &-img {
        img {
          width: 275px;
          height: 275px;
          border: 12px solid #152a23;

          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.35);
        }
      }

      &-title {
        margin-bottom: 16px;
        h1 {
          font-size: 42px;

          font-weight: 500;
          letter-spacing: 4px;

          font-family: "Rock Salt", cursive;
          text-align: center;
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
          font-size: 16px;
          color: #555;

          font-weight: 600;
        }
      }
      &-btns {
        margin-top: 16px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;

        a {
          &:first-of-type {
            margin-right: 0;
            margin-bottom: 12px;
          }
        }
      }
    }
  }
}
</style>
