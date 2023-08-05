<template>
  <div class="footer__container">
    <h2>Noxus-cine</h2>
    <div class="footer__content">
      <ul class="footer__socials">
        <li>
          <a
            href="https://www.linkedin.com/in/matthieu-b-8070a7262/"
            class="footer__buttons"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/core.2k"
            class="footer__buttons"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/FrenchFounders/tp-cinema-ugo-matthieu"
            class="footer__buttons"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-github"></i>
          </a>
        </li>
      </ul>
    </div>
    <div class="footer__rights">
      <p>© 2023 Noxus-Ciné. All rights reserved.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class MainFooter extends Vue {}
</script>

<style lang="scss" scoped>
* {
  margin-top: auto;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

h2 {
  margin: 0;
  padding: 0;
  margin-bottom: 10px;
  margin-right: 17px;
}

.footer__container {
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  width: 100%;
  height: 235px;
  margin-top: 30px;
}

.footer__socials {
  i {
    font-size: 30px;
    margin: 0 10px;
  }
}

.footer__buttons {
  color: white;
  text-decoration: none;

  &:hover {
    transition: 1s;
    color: lightskyblue;
  }
}

.footer__rights {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin-top: 15px;
}
</style>
