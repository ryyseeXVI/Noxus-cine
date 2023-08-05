<template>
    <div class="footer">
      <h2 class ="footer__title">{{ t('noxus') }}</h2>
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
        <p>{{ t('rights') }}</p>
      </div>
    </div>
  </template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n({
    messages: {
        "en": {
            "noxus": "Noxus-Ciné",
            "rights": "© 2023 Noxus-Ciné. All rights reserved"
        },
        "fr": {
            "noxus": "Noxus-Ciné",
            "rights": "© 2023 Noxus-Ciné. Tous droits réservés"
        }
    }
});
</script>

<style lang="scss" scoped>

  .footer {
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
    margin-top: auto;
    box-sizing: border-box;
    padding: 0;
    margin: 0;

    &__title {
      margin-bottom: 10px;
      margin-left: 30px;
      margin-top: auto;
      box-sizing: border-box;
      padding: 0;
    }

    &__socials {
      i {
        font-size: 30px;
        margin: 0 10px;
        margin-top: auto;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
      }
    }

    &__buttons {
      color: white;
      text-decoration: none;
      margin-top: auto;
      box-sizing: border-box;
      padding: 0;
      margin: 0;

      &:hover {
        transition: 1s;
        color: lightskyblue;
      }
    }

    &__rights {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin-top: 15px;
      margin-top: auto;
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }
  }
</style>
