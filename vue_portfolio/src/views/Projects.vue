<template>
  <main class="main">
    <div class="container">
      <div class="projects">
        <div class="projects-header">
          <h1>Projects</h1>
        </div>

        <div class="websites-separator">
          <div class="website-text">
            <div class="website-text--div">
              <p>W</p>
              <p>e</p>
              <p>b</p>
              <p>s</p>
              <p>i</p>
              <p>t</p>
              <p>e</p>
              <p>s</p>
            </div>
          </div>

          <div class="websites">
            <h3>Websites</h3>
            <div class="underline"></div>
            <project-cmp
              v-for="proj in projects"
              :color="proj.color"
              :title="proj.title"
              :tech="proj.tech"
              :description="proj.description"
              :image="proj.image"
              :key="proj.title"
              :link="proj.link"
            ></project-cmp>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import ProjectCmp from "../components/ProjectCmp.vue";
export default {
  components: {
    ProjectCmp,
  },

  data() {
    return {
      projects: [
        {
          title: "My Portfolio Website",
          tech: "HTML, CSS (SCSS), JS (Vue)",
          description:
            "The website you're currently viewing. This is a single page application designed and coded from scratch with Vue JS. No pre-built themes were used - just tips and tricks I've picked up along my journey with my own aesthetic mixed in. I was aiming for a modern and visually pleasing user experience while highlighting my abilities in Web Development. I appreciate you visiting!",
          image: "https://bombyxweb.com/imgs/portfolio_ss.png",
          color: "dark",
          link: "https://charlesmorris.com",
        },
        {
          title: "Bombyx Web",
          tech: "HTML, CSS, Bootstrap",
          description:
            "Prototype for a modern and professional web development company called Bombyx. Structured with Bootstrap. Image carousel, accordion, scrollspy, parallax, and tasteful animations bring this website to life. Custom and original design. Fully responsive.",
          image: "https://bombyxweb.com/imgs/christines_cartoons.jpg",

          color: "red",
          link: "https://www.bombyxweb.com",
        },
        {
          title: "Christine's Cartoons",
          tech: "HTML, CSS (SCSS), Vanilla JavaScript",
          description:
            "Customized website built from scratch with collaboration from the client/artist. I aimed to create a modern and clean web design to highlight the client's artwork and storytelling. Custom image carousel built with JavaScript. Image compression used for faster loading times without compromising quality. Code not made public for privacy reasons. Website will be expanded with new features and frequent updates.",
          image: "https://bombyxweb.com/imgs/bombyx.jpg",
          color: "green",
          link: "https://christinescartoons.com",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.websites-separator {
  display: flex;
  justify-content: center;
}

.website-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 48px;

  &--div {
    text-align: center;
    border-left: 4px solid #002a15;
    padding-left: 8px;

    p {
      font-size: 52px;
      line-height: 1.4;
    }
  }
}
.main {
  margin-top: 48px;

  .container {
    max-width: 1280px;
    margin: 0 auto;
  }

  .websites {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h3 {
      display: none;
      font-weight: 500;
      font-size: 24px;
      text-align: center;
    }

    .underline {
      display: none;
      margin: 6px auto;
      width: 46px;
      height: 4px;
      background: #002a15;
    }
  }

  .projects {
    padding: 0px 24px 48px;
    &-header {
      margin-bottom: 48px;
      h1 {
        font-family: "Rock Salt", cursive;
        font-size: 48px;
        font-weight: 400;
        letter-spacing: 2px;
        color: #0e8b21;
        color: #ffd700;
      }
    }
  }
}

@media (max-width: 900px) {
  .websites-separator {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .website-text {
    display: none;

    // align-items: center;
    // justify-content: center;
    padding: 24px 48px;

    &--div {
      text-align: center;
      border-left: 4px solid #002a15;
      padding-left: 8px;

      p {
        font-size: 52px;
        line-height: 1.4;
      }
    }
  }
  .main {
    margin-top: 48px;

    .websites {
      h3 {
        display: block;
      }

      .underline {
        display: block;
      }
    }

    .container {
      max-width: 1280px;
      margin: 0 auto;
    }

    .projects {
      padding: 0px 8px 48px;
      &-header {
        h1 {
          font-size: 32px;
        }
        margin-bottom: 48px;
      }
    }
  }
}
</style>
