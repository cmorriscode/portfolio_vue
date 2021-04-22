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
        <h2><i class="fas fa-address-card"></i> About</h2>
        <div class="hr"></div>
        <p>
          Thanks for visiting. I'm a Front End Web Developer who's passionate
          about elevating the UI and UX of everything I work on. I believe
          things should look better. All the things.
        </p>
        <p>
          I'm proficient in the core front end technologies - HTML, CSS, and
          JavaScript. Professionally, I spend my time everyday designing and
          developing web pages and components for clients with the goal of
          improving the look, feel, and overall user experience across our
          product line.
        </p>
        <p>
          I'm also a lifelong musician with a strong interest in philosophy.
          Both of those parts of my brain - creative and logical - have found a
          perfect marriage in web development.
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
      infoHeader: ["Developer.", "Designer.", "Musician.", "Creator."],
    };
  },
  methods: {
    mixInfoHeader() {
      let mix = this.infoHeader.map((word) => word);
      console.log(mix);
    },
  },
  mounted() {
    this.mixInfoHeader();
  },
};
</script>

<style lang="scss" scoped>
// ABOUT
.about {
  clip-path: polygon(0 0, 100% 6%, 100% 100%, 0% 100%);
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
        color: hsl(129, 82%, 40%);
        text-align: center;
        font-size: 52px;
        transform: rotate(6deg);
        margin-top: 24px;
      }

      p.about-info--header-3 {
        color: #f5d76e;
        font-size: 52px;
        transform: rotate(-8deg);
      }
      p.about-info--header-4 {
        color: #3b0053;
        font-size: 52px;
        text-align: right;
        transform: rotate(-12deg);
      }
      p.about-info--header-5 {
        color: #551700;
        font-size: 52px;
        text-align: center;
        transform: rotate(14deg);
      }
    }
  }
  &-content {
    width: 100%;
    margin-top: 48px;
    display: flex;
    flex-direction: column;

    align-items: center;

    h2 {
      font-size: 48px;
      font-weight: 400;
      letter-spacing: 2px;
    }
    .hr {
      width: 92px;
      height: 8px;
      margin: 16px auto;
      background: green;
      background: linear-gradient(120deg, #3cf73c, #002627);
      clip-path: polygon(100% 0, 99% 2%, 52% 99%, 0 3%, 0 0);
    }
    p {
      font-size: 18px;
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
</style>
