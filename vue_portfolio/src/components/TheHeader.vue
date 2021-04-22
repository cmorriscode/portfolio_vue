<template>
  <header class="header">
    <nav class="navbar">
      <div class="navbar-logo">
        <p>CMorris Code</p>
      </div>
      <div class="navbar-list">
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
          <!-- <li
            @mouseover="hoverOverAbout"
            @mouseleave="hoverOutAbout"
            :class="{ isHover: navHoverAbout, isHoverOut: navHoverOutAbout }"
          >
            <router-link to="/about">About</router-link>
          </li>
          <li
            @mouseover="hoverOverSkills"
            @mouseleave="hoverOutSkills"
            :class="{ isHover: navHoverSkills, isHoverOut: navHoverOutSkills }"
          >
            <router-link to="/skills">Skills</router-link>
          </li> -->
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
      navHoverAbout: false,
      navHoverOutAbout: false,
      navHoverSkills: false,
      navHoverOutSkills: false,
      navHoverProjects: false,
      navHoverOutProjects: false,
      navHoverContact: false,
      navHoverOutContact: false,
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
    hoverOverAbout() {
      this.navHoverAbout = true;
      this.navHoverOutAbout = false;
      console.log(this.navHover);
    },
    hoverOutAbout() {
      this.navHoverAbout = false;
      this.navHoverOutAbout = true;
    },
    hoverOverSkills() {
      this.navHoverSkills = true;
      this.navHoverOutSkills = false;
    },
    hoverOutSkills() {
      this.navHoverSkills = false;
      this.navHoverOutSkills = true;
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
  },
};

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".navbar").style.padding = "16px 8px";
    // document.getElementById("logo").style.fontSize = "25px";
    // document.querySelector(".header").style.background = "#000";
    // document.querySelector(".navbar").style.borderBottom = "1px solid #d5d5d5";
  } else {
    document.querySelector(".navbar").style.padding = "24px 24px 16px";
    // document.getElementById("logo").style.fontSize = "35px";
    // document.querySelector(".header").style.background = "#FFF";
    // document.querySelector(".navbar").style.borderBottom = "2px solid #2b2b2b";
  }
}
</script>

<style lang="scss" scoped>
.header {
  border-bottom: 1px solid #d5d5d5;
  border-bottom: 4px solid #2b2b2b;
  // background: #f2f1ef;
  // box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);
  // background: #000000;
  // position: relative;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 30;
  background: #fff;
  background: #d5d5d5;
  background: #fefefe;
  .navbar {
    display: flex;
    justify-content: space-between;
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
  // border-bottom: 2px solid #002627;
  // transition: all 0.1s;
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
    width: 100%;
  }
}

@keyframes slideLeft {
  0% {
    width: 100%;
  }
  50% {
    width: 50%;
  }
  100% {
    width: 0%;
  }
}
</style>
