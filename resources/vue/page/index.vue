<script setup>
import { ref, reactive } from 'vue'
import PageTitle from '@/vue/project/PageTitle'
import TextStyle from '@/vue/project/TextStyle'
import CSwitch from '@/vue/component/CSwitch'
const props = defineProps({
    sampleValue: {
        type: String,
        default: 'default default',
    },
})
const dataCount = ref(0)

function increment() {
    dataCount.value++
}

function large() {
    return dataCount.value >= 10
}

const dataCheckedItem = ref([])
function onChangeSwitch(ITEM_VALUE, isChecked) {
    const checkedItemIndex = dataCheckedItem.value.indexOf(ITEM_VALUE)
    if (checkedItemIndex !== -1) {
        dataCheckedItem.value.splice(checkedItemIndex, 1)
    }
    if (isChecked) {
        dataCheckedItem.value.push(ITEM_VALUE)
    }
}
</script>

<template>
    <div class="indexPage">
        <p>{{ sampleValue }}</p>
        <PageTitle
            titleText="PageTitle component h1"
            :glade="1"
        />
        <PageTitle
            titleText="PageTitle component h2"
            :glade="2"
        />
        <PageTitle
            titleText="PageTitle component h3"
            :glade="3"
        />
        <PageTitle
            titleText="PageTitle component h4"
            :glade="4"
        />
        <PageTitle
            titleText="PageTitle component h5"
            :glade="5"
        />
        <PageTitle
            titleText="PageTitle component h6"
            :glade="6"
        />
        <TextStyle
            titleText="TextStyle component glade 1"
            :glade="1"
        />
        <TextStyle
            titleText="TextStyle component glade 2"
            :glade="2"
        />
        <TextStyle
            titleText="TextStyle component glade 3"
            :glade="3"
        />
        <TextStyle
            titleText="TextStyle component glade 4"
            :glade="4"
        />
        <TextStyle
            titleText="TextStyle component glade 5"
            :glade="5"
        />
        <TextStyle
            titleText="TextStyle component glade 6"
            :glade="6"
        />
        <p>Entry: Index 1</p>
        <button @click="increment">dataCount is: {{ dataCount }}</button>
        <div v-show="large()">dataCount is Large than 10!</div>
        <br />
        <br />
        <div>
            <CSwitch
                labelText="check item 01"
                :isChecked="dataCheckedItem.includes(1)"
                @onChange="(isChecked) => onChangeSwitch(1, isChecked)"
            />
            &nbsp;&nbsp;
            <CSwitch
                labelText="check item 02"
                :isChecked="dataCheckedItem.includes(2)"
                @onChange="(isChecked) => onChangeSwitch(2, isChecked)"
            />
        </div>
    </div>
</template>

<style lang="scss"></style>
