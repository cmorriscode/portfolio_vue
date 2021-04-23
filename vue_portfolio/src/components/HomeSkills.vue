<template>
  <section class="skills">
    <div class="skills-container">
      <div class="skills-header">
        <h3>My Toolkit</h3>
        <div class="hr"></div>
      </div>
      <div class="skills-card">
        <ul>
          <li><i class="fab fa-html5" style="color: #e34c26"></i> HTML5</li>
          <li><i class="fab fa-css3-alt" style="color: #264de4"></i> CSS3</li>
          <li>
            <i class="fab fa-js-square" style="color: #f0db4f"></i> JavaScript
          </li>
          <li>
            <i class="fab fa-bootstrap" style="color: #563d7c"></i> BootStrap
          </li>
        </ul>
        <ul>
          <li><i class="fab fa-vuejs" style="color: #42b883"></i> Vue JS</li>
          <li>
            <i class="fas fa-paint-brush" style="color: #ff0000"></i> Adobe
            Creative Suite (Photoshop, Dreamweaver, XD)
          </li>
          <li><i class="far fa-envelope"></i> HTML Email Development</li>
          <li>
            <i class="fas fa-pencil-alt" style="color: #00008b"></i> Web & UI/UX
            Design
          </li>
        </ul>
        <ul>
          <li>SASS (SCSS)</li>
          <li>Email On Acid (Email testing)</li>
          <li>Git for Version Control</li>
          <li>Microsoft Azure Active Directory</li>
          <li>... and continually growing</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.skills {
  width: 100%;
  background: #fff;
  padding: 42px 24px;

  &-container {
    max-width: 1400px;
    margin: 64px auto;
  }

  &-header {
    h3 {
      text-align: center;
      font-size: 42px;
      font-size: 48px;
      letter-spacing: 2px;
      font-weight: 400;
    }
    .hr {
      width: 92px;
      height: 8px;
      margin: 16px auto;
      background: green;
      background: linear-gradient(120deg, #3cf73c, #002627);
      clip-path: polygon(100% 0, 99% 2%, 52% 99%, 0 3%, 0 0);
    }
  }

  &-card {
    width: 100%;

    margin-top: 32px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 32px auto;
    grid-gap: 24px;

    ul {
      padding: 24px 12px;
      display: flex;
      flex-direction: column;

      &:last-of-type {
        li:last-of-type {
          color: #5d1212;
          font-weight: 500;
        }
      }
    }
    li {
      font-size: 20px;
      margin-top: 24px;
    }
  }
}

@media (max-width: 720px) {
  .skills {
    padding: 24px 24px;
    &-container {
    }

    &-header {
      h3 {
        font-size: 42px;
        letter-spacing: 2px;
        font-weight: 400;
      }
      .hr {
        width: 92px;
        height: 8px;
        margin: 16px auto;
        background: green;
        background: linear-gradient(120deg, #3cf73c, #002627);
        clip-path: polygon(100% 0, 99% 2%, 52% 99%, 0 3%, 0 0);
      }
    }

    &-card {
      width: 100%;

      margin-top: 32px;
      display: grid;
      grid-template-columns: 1fr;
      margin: 32px auto;
      grid-gap: 0;
      text-align: center;

      ul {
        padding: 0 24px;
        display: flex;
        flex-direction: column;

        &:first-of-type {
        }

        &:last-of-type {
          li:last-of-type {
            color: #5d1212;
            font-weight: 500;
          }
        }
      }
      li {
        font-size: 18px;
        margin-top: 24px;
      }
    }
  }
}

@media (max-width: 500px) {
  .skills {
    &-header {
      h3 {
        font-size: 32px;
      }
    }
  }
}
</style>
