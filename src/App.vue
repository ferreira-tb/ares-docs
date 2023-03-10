<script setup lang="ts">
import { RouterView } from 'vue-router';
import { NConfigProvider, darkTheme } from 'naive-ui';
import NavBar from '@/components/NavBar.vue';
</script>

<template>
    <NConfigProvider :theme="darkTheme">
        <NavBar />
        <RouterView v-slot="{ Component }">
            <template v-if="Component">
                <Transition name="fade" mode="out-in">
                    <Suspense>
                        <component :is="Component" />
                        <template #fallback>
                            <span class="loading-text">Carregando...</span>
                        </template>
                    </Suspense>
                </Transition>
            </template>
        </RouterView>
    </NConfigProvider>
</template>

<style scoped></style>