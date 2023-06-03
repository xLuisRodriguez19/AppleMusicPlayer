<script setup lang="ts">
  // import i18n from '@/i18n/index.ts'
  import UserAccount from '@/components/icons/UserAccount.vue'
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()
</script>

<template>
  <div class="login-container">
    <div class="login-user">
      <UserAccount />
      <span>{{ t('LOGIN.TITLE') }}</span>
    </div>
    <div class="form-container">
      <form
        class="login-form"
        action=""
      >
        <label for="email">
          {{ t('LOGIN.LABELS.EMAIL') }}
        </label>
        <input
          id="email"
          type="text"
        />
        <label for="password">
          {{ $t('LOGIN.LABELS.PASSWORD') }}
        </label>
        <input
          id="password"
          type="password"
        />
        <button>{{ $t('LOGIN.BUTTON') }}</button>
      </form>
    </div>
  </div>
</template>
