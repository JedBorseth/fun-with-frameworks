<template>
  <div>
    <div class="navbar bg-primary text-primary-content">
      <div class="flex-1">
        <NuxtLink class="btn btn-ghost normal-case text-xl" to="/"
          >NuxtJS</NuxtLink
        >
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li><NuxtLink to="/top">Top Posts</NuxtLink></li>
          <li>
            <details>
              <summary>About</summary>
              <ul class="p-2 bg-primary">
                <li><a href="#">GitHub</a></li>
                <li><NuxtLink to="about">About</NuxtLink></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
