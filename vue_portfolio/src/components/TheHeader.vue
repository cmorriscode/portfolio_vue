<template>
  <header class="header">
    <nav class="navbar">
      <div class="navbar-logo">
        <p>CMorris Code</p>
      </div>
      <div class="navbar-list">
        <div class="hamburger" @click="toggleHamburger">
          <div class="hamburger-icon" :class="{ open: hamburgerOpen }"></div>
          <ul v-if="false">
            <li
              @mouseover="hoverOverHome"
              @mouseleave="hoverOutHome"
              :class="{
                isHover: navHoverHome,
                isHoverOut: navHoverOutHome,
              }"
            >
              <router-link to="/home">Home</router-link>
            </li>

            <li
              @mouseover="hoverOverProjects"
              @mouseleave="hoverOutProjects"
              :class="{
                isHover: navHoverProjects,
                isHoverOut: navHoverOutProjects,
              }"
            >
              <router-link to="/projects">Projects</router-link>
            </li>
            <li
              @mouseover="hoverOverContact"
              @mouseleave="hoverOutContact"
              :class="{
                isHover: navHoverContact,
                isHoverOut: navHoverOutContact,
              }"
            >
              <router-link to="/contact">Contact</router-link>
            </li>
          </ul>
        </div>
        <ul>
          <li
            @mouseover="hoverOverHome"
            @mouseleave="hoverOutHome"
            :class="{
              isHover: navHoverHome,
              isHoverOut: navHoverOutHome,
            }"
          >
            <router-link to="/home">Home</router-link>
          </li>

          <li
            @mouseover="hoverOverProjects"
            @mouseleave="hoverOutProjects"
            :class="{
              isHover: navHoverProjects,
              isHoverOut: navHoverOutProjects,
            }"
          >
            <router-link to="/projects">Projects</router-link>
          </li>
          <li
            @mouseover="hoverOverContact"
            @mouseleave="hoverOutContact"
            :class="{
              isHover: navHoverContact,
              isHoverOut: navHoverOutContact,
            }"
          >
            <router-link to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navHoverHome: false,
      navHoverOutHome: false,

      navHoverProjects: false,
      navHoverOutProjects: false,
      navHoverContact: false,
      navHoverOutContact: false,
      hamburgerOpen: false,
    };
  },
  methods: {
    hoverOverHome() {
      this.navHoverHome = true;
      this.navHoverOutHome = false;
      console.log(this.navHover);
    },
    hoverOutHome() {
      this.navHoverHome = false;
      this.navHoverOutHome = true;
    },

    hoverOverProjects() {
      this.navHoverProjects = true;
      this.navHoverOutProjects = false;
    },
    hoverOutProjects() {
      this.navHoverProjects = false;
      this.navHoverOutProjects = true;
    },
    hoverOverContact() {
      this.navHoverContact = true;
      this.navHoverOutContact = false;
    },
    hoverOutContact() {
      this.navHoverContact = false;
      this.navHoverOutContact = true;
    },
    toggleHamburger() {
      this.hamburgerOpen = !this.hamburgerOpen;
    },
  },
};

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".navbar").style.padding = "16px 8px";
  } else {
    document.querySelector(".navbar").style.padding = "24px 24px 16px";
  }
}
</script>

<style lang="scss" scoped>
.header {
  border-bottom: 4px solid #2b2b2b;

  position: sticky;
  top: 0;
  left: 0;
  z-index: 30;

  background: #fefefe;
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 24px 16px;
    transition: all 0.3s;
    &-logo {
      p {
        color: hsl(129, 82%, 30%);
        font-weight: 700;
      }
    }
    &-list {
      ul {
        display: flex;

        li {
          margin-right: 16px;
          &:last-of-type {
            margin-right: 0;
          }
          a {
            display: inline-block;
            font-size: 16px;
            font-weight: 600;
            transition: all 0.35s ease-out;

            color: hsl(129, 82%, 30%);
            &:hover {
              color: #0e8b21;
              color: hsl(129, 82%, 40%);
            }

            &.router-link-active {
              color: hsl(129, 82%, 30%);
              color: hsl(129, 82%, 40%);
              padding-bottom: 1px;
              border-bottom: 2px solid #002627;
            }
          }
        }
      }
    }
  }
}

.isHover {
  position: relative;
  &::before {
    position: absolute;
    content: "";
    top: 20px;
    left: 0;
    border-bottom: 2px solid #002627;
    animation: slideRight 0.15s ease-in forwards;
  }
}

.isHoverOut {
  position: relative;
  &::before {
    position: absolute;
    content: "";
    top: 20px;
    left: 0;
    border-bottom: 2px solid #002627;
    animation: slideLeft 0.15s ease-out;
  }
}

@keyframes slideRight {
  0% {
    width: 0%;
  }
  50% {
    width: 50%;
  }
  100% {
    width: 80%;
  }
}

@keyframes slideLeft {
  0% {
    width: 80%;
  }
  50% {
    width: 50%;
  }
  100% {
    width: 0%;
  }
}

// hamburger

.hamburger {
  cursor: pointer;
  padding: 24px 4px;
  display: none;
  &-icon {
    width: 38px;
    height: 4px;
    background: hsl(129, 82%, 30%);
    position: relative;
    transition: all 0.25s ease-in-out;

    &::before {
      position: absolute;
      content: "";
      width: 34px;
      height: 4px;
      background: #000;
      top: -10px;
      right: 0;
    }
    &::after {
      position: absolute;
      content: "";
      width: 28px;
      height: 4px;
      background: #000;
      top: 10px;
      right: 0;
    }

    &.open {
      width: 40px;
      height: 4px;
      background: hsl(129, 82%, 30%);
      position: relative;
      width: 24px;
      height: 4px;

      transform: rotate(45deg);
      &::before {
        position: absolute;
        content: "";
        width: 24px;
        height: 4px;
        background: #000;
        background: hsl(129, 82%, 30%);
        top: -10px;
        top: 0px;
        right: 0;
        transform: rotate(95deg);
      }
      &::after {
        position: absolute;
        content: "";
        width: 0px;
        height: 0px;
        background: #000;
        top: 10px;
        right: 0;
        transform: rotate(45deg);
      }
    }
  }
}

@media (max-width: 900px) {
  .header {
    .navbar {
      &-list {
        ul {
          display: none;
        }
      }
    }
  }

  .hamburger {
    display: block;
    transition: all 0.35s ease-in;

    ul {
      display: block !important;
      margin-top: 32px;

      li {
        margin-top: 24px;
      }
    }
  }
}
</style>
