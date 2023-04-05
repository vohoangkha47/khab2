<script>
import AppHeader from "@/components/AppHeader.vue";
import ContactCard from "@/components/ContactCard.vue";
import ContactList from "@/components/ContactList.vue";
import InputSearch from "@/components/InputSearch.vue";
export default {
    components: {
        AppHeader,
        ContactCard,
        ContactList,
        InputSearch,
    },
};

</script>
<template>
    <div id="app">
        <AppHeader />

        <div class="container mt-3">
            <router-view />
        </div>
    </div>
</template>

<style>
.page {
    max-width: 400px;
    margin: auto;
}
</style>