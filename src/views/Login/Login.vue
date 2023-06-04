<script setup lang="ts">
  // import i18n from '@/i18n/index.ts'
  import UserAccount from '@/components/icons/UserAccount.vue'
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()
</script>

<template>
  <div class="login-container">
    <div class="box-container">
      <div class="login-user">
        <UserAccount
          color="#fc3c44"
          width="100"
        />
        <span class="label-form">{{ t('LOGIN.TITLE') }}</span>
      </div>
      <div class="form-container">
        <form
          class="login-form"
          action=""
        >
          <label
            for="email"
            class="label-form"
          >
            {{ t('LOGIN.LABELS.EMAIL') }}
          </label>
          <input
            class="input-form"
            id="email"
            type="text"
          />
          <label
            for="password"
            class="label-form"
          >
            {{ $t('LOGIN.LABELS.PASSWORD') }}
          </label>
          <input
            class="input-form"
            id="password"
            type="password"
          />
          <button class="form-button">{{ $t('LOGIN.BUTTON') }}</button>
        </form>
      </div>
    </div>
  </div>
</template>
