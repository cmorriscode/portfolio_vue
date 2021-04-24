<template>
  <section class="about">
    <div class="about-container">
      <div class="about-info">
        <div class="about-info--header">
          <h3 class="about-info--header-1">
            Hi, I'm <span class="highlight">Charlie.</span>
          </h3>
          <p class="about-info--header-2">{{ infoHeader[0] }}</p>
          <p class="about-info--header-3">{{ infoHeader[1] }}</p>
          <p class="about-info--header-4">{{ infoHeader[2] }}</p>
          <p class="about-info--header-5">{{ infoHeader[3] }}</p>
        </div>
        <div class="about-info--content"></div>
      </div>
      <div class="about-content">
        <h2>About</h2>
        <div class="hr"></div>
        <p>
          Thanks for visiting. I'm a <span>Front End Web Developer</span> who's
          passionate about elevating the UI and UX of everything I work on. I
          believe things should look better. All the things.
        </p>
        <p>
          I'm proficient in the core front end technologies - HTML, CSS, and
          JavaScript. Professionally, I spend my time everyday designing and
          developing web pages and components for clients with the goal of
          improving the look, feel, and overall user experience across the
          product line.
        </p>

        <router-link to="/contact">
          <main-btn class="outline">Let's Collaborate!</main-btn>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      infoHeader: [
        "Developer.",
        "Designer.",
        "Musician.",
        "Creator.",

        "UI/UX.",
        "Communicator.",
        "Email.",
        "Logos.",
        "Thinker.",
        "Listener.",
        "Collaborator.",
      ],
    };
  },
  methods: {
    mixInfoHeader() {
      let mix = this.infoHeader.map((word) => word);
      let popped = mix.splice(0, 1);
      mix.push(popped[0]);

      this.infoHeader = mix;
    },
  },
  mounted() {
    setInterval(() => {
      this.mixInfoHeader();
    }, 3000);
  },
};
</script>

<style lang="scss" scoped>
// ABOUT
.about {
  clip-path: polygon(0 0, 100% 6%, 100% 100%, 0% 100%);
  clip-path: polygon(0 0, 100% 5%, 100% 100%, 0% 95%);
  margin-top: 92px;

  width: 100%;
  background: #f2f1ef;
  padding: 42px 24px;
  // border-bottom: 1px solid green;

  &-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    // margin-top: 50px;
    max-width: 1280px;
    margin: 64px auto;
    grid-gap: 64px;
  }

  &-info {
    &--header {
      // text-align: center;
      h3,
      p {
        font-size: 52px;
        font-weight: 400;
        font-family: "Rock Salt", cursive;
        line-height: 2;
        color: hsl(129, 82%, 80%);
        color: #12ba2b;
        color: #222;
      }

      .highlight {
        position: relative;

        &::before {
          position: absolute;
          content: "";
          top: 72px;
          left: 0;
          width: 100%;
          height: 32px;
          border-radius: 4px;
          // background: #12ba2b4d;

          background: #ffd700;
          background: #550055;
          background: rgba(96, 0, 0, 0.3);
          background: #fde3a7;
          z-index: -500;
        }
      }

      p.about-info--header-2 {
        // color: hsl(129, 82%, 40%);
        text-align: center;

        transform: rotate(6deg);
        margin-top: 24px;
        color: #8f8f8f;
      }

      p.about-info--header-3 {
        // color: #f5d76e;

        transform: rotate(-8deg);
        color: #8f8f8f;
      }
      p.about-info--header-4 {
        // color: #3b0053;

        text-align: right;
        transform: rotate(-12deg);
        color: #8f8f8f;
      }
      p.about-info--header-5 {
        // color: #551700;
        // color: #f5d76e;
        // color: #f5d76e;
        // color: hsl(129, 82%, 40%);

        text-align: center;
        transform: rotate(14deg);
        color: #8f8f8f;
      }
    }
  }
  &-content {
    width: 100%;
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    padding: 24px 20px;
    border-radius: 8px;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25);
    background: hsl(129, 82%, 80%);
    background: #fff;
    border-top: 8px solid #12ba2b;
    border-top: 12px solid #2b2b2b;
    // color: #fff;

    align-items: center;

    h2 {
      font-size: 48px;
      font-weight: 400;
      letter-spacing: 2px;
    }
    .hr {
      width: 92px;
      height: 6px;
      margin: 16px auto;
      background: green;
      background: linear-gradient(120deg, #3cf73c, #002627);
      clip-path: polygon(100% 0, 99% 2%, 52% 99%, 0 3%, 0 0);
    }
    p {
      font-size: 18px;
      margin-bottom: 24px;
      color: #444;

      & span {
        color: #7fffd4;
        color: #00008b;
        color: #12ba2b;
        font-weight: 600;
      }

      &:first-of-type {
        font-size: 20px;
        margin-top: 24px;
        padding-left: 12px;
        border-left: 6px solid #002a2a;
        border-left: 6px solid #12ba2b;
        letter-spacing: 1px;
        color: #333;
      }

      &:last-of-type {
        margin-bottom: 32px;
      }
    }
  }
}

@media (max-width: 920px) {
  .about {
    &-container {
      grid-template-columns: 1fr;
    }
    &-info {
      &--header {
        // text-align: center;
        h3,
        p {
          font-size: 42px;
        }
        .highlight {
          position: relative;

          &::before {
            top: 48px;
          }
        }
      }
    }
  }
}

@media (max-width: 720px) {
  .about {
    margin-top: 92px;

    padding: 42px 24px 48px;
    // border-bottom: 1px solid green;

    &-container {
    }

    &-info {
      &--header {
        // text-align: center;
        h3,
        p {
          font-size: 32px;
        }

        .highlight {
          position: relative;

          &::before {
            position: absolute;
            content: "";
            top: 42px;
            left: 0;
            width: 100%;
            height: 32px;
            border-radius: 4px;
            // background: #12ba2b4d;

            background: #ffd700;
            background: #550055;
            background: rgba(96, 0, 0, 0.3);
            background: #fde3a7;
            z-index: -500;
          }
        }
      }
    }
    &-content {
      width: 100%;
      margin-top: 48px;

      padding: 24px 20px;

      h2 {
        font-size: 42px;
      }

      p {
        font-size: 16px;
        margin-bottom: 24px;
        &:first-of-type {
          margin-top: 24px;
        }

        &:last-of-type {
          margin-bottom: 32px;
        }
      }
    }
  }
}

@media (max-width: 500px) {
  .about {
    margin-top: 92px;

    &-info {
      &--header {
        h3,
        p {
          font-size: 24px;
        }

        .highlight {
          &::before {
            position: absolute;
            content: "";
            top: 32px;
            left: 0;
            width: 100%;
            height: 24px;

            background: #fde3a7;
            z-index: -500;
          }
        }
      }
    }
    &-content {
      margin-top: 16px;

      h2 {
        font-size: 32px;
      }

      p {
        font-size: 16px;
      }
    }
  }
}
</style>
