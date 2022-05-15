<template>
  <div class="content-center">
    <div class="s-width">
      <app-header />
      <app-balance-info />
      <app-action @send="$router.push('/send')" />
      <app-assets />
    </div>
  </div>
</template>
<script src="./account.ts" />
