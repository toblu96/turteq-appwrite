<template>
  <PageWithHeader>
    <template #header>
      <div class="flex items-center justify-between w-full">
        <div class="flex space-x-2">
          <h1 class="font-semibold">
            Project {{ $route.params.projectid }}
          </h1>
        </div>
      </div>
    </template>
  </PageWithHeader>
</template>
