<template>
<div class="row no-gutters heading">
    <div class="col">
        {{ title }}
    </div>
    <div class="col-2 float-right">
        {{ subtitle }}
    </div>
</div>
</template>
<script>
export default {
    props: {
        title: String,
        subtitle: String
    }
}
</script>
<style>
.float-right {
    margin-left: auto;
    margin-right: 0;
    float: right;
    text-align: right;
}

.heading {
    border-bottom: 2px solid black;
    padding: 0;
    padding-bottom: 0.3rem;
    font-family: Arial Black;
}
</style>