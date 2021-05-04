<template>
  <div
    class="project"
    :class="{
      dark: color === 'dark',
      red: color === 'red',
      green: color === 'green',
      blue: color === 'blue',
    }"
  >
    <div class="project-img">
      <img :src="image" :alt="title" />
    </div>
    <div class="project-content">
      <div class="project-content--title">
        <h4
          :class="{
            redText: color === 'red',
            darkText: color === 'dark',
            greenText: color === 'green',
            blueText: color === 'blue',
          }"
        >
          {{ title }}
        </h4>
      </div>
      <div class="project-content--tech">
        <p>{{ tech }}</p>
      </div>
      <div class="project-content--description">{{ description }}</div>
      <div class="project-content--btns">
        <main-btn class="spacer" :link="link">View Site</main-btn>
        <main-btn class="outline">View Code</main-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["color", "title", "tech", "description", "image", "link"],
};
</script>

<style lang="scss" scoped>
a {
  &:visited {
    color: #fff;
  }
}
.dark {
  border-color: #2b2b2b !important;
}

.dark-text {
  color: #2b2b2b !important;
}
.red {
  border-color: #5d1212 !important;
}

.redText {
  color: #5d1212 !important;
}

.green {
  border-color: #12ba2b !important;
}

.greenText {
  color: #12ba2b !important;
}

.blue {
  border-color: hsl(202, 100%, 31%) !important;
}

.blueText {
  color: hsl(202, 100%, 31%) !important;
}

.project {
  padding: 24px 20px;
  padding: 32px 20px;
  max-width: 980px;
  margin: 48px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  display: grid;
  grid-gap: 36px;
  grid-template-columns: 1fr 2fr;
  border-top: 8px solid #12ba2b;
  border-radius: 4px;

  &-img {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      min-width: 240px;
      max-width: 100%;
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    }
  }

  &-content {
    &--title {
      h4 {
        text-align: right;
        font-size: 24px;
        font-weight: 500;
        color: #444;
      }
      margin-bottom: 12px;
    }
    &--tech {
      p {
        text-align: right;
        margin-bottom: 16px;
        font-size: 14px;
        color: #666;
      }
    }

    &--description {
      padding: 12px 12px;
      background: #f3f2f2;
      border-radius: 4px;
      line-height: 1.4;
    }

    &--btns {
      margin-top: 16px;
      display: flex;
      justify-content: center;

      .spacer {
        margin-right: 24px;
      }

      a {
        &:first-of-type {
          margin-right: 16px;
        }
      }
    }
  }
}

@media (max-width: 900px) {
  .project {
    padding: 24px 20px;
    padding: 32px 20px;
    max-width: 980px;
    margin: 48px auto;

    display: grid;
    grid-gap: 36px;
    grid-template-columns: 1fr;
    border-top: 8px solid #12ba2b;
    border-radius: 4px;

    &-img {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        min-width: 200px;
        max-width: 80%;
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
      }
    }

    &-content {
      &--title {
        h4 {
          text-align: right;
          font-size: 24px;
          font-weight: 600;
          color: #444;
          text-align: center;
        }
        margin-bottom: 12px;
      }
      &--tech {
        p {
          text-align: center;
          margin-bottom: 16px;
          font-size: 14px;
          color: #666;
        }
      }

      &--description {
        padding: 12px 12px;
        background: #efefef;
        border-radius: 4px;
      }

      &--btns {
        margin-top: 16px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .spacer {
          margin-right: 24px;
        }

        a {
          &:first-of-type {
            margin-right: 0px;
            margin-bottom: 16px;
          }
        }
      }
    }
  }
}
</style>
