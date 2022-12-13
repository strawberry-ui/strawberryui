<template>
    <div class="wrapper">
    <StrawberryTooltip tooltip-content="Huehuehue kopi laka luku tiki taka tuku"/>
    <div class="rounded-md border">
    <StrawberryAccordion root-class="transition-all duration-300" class="p-4 border-b">
        <StrawberryAccordionHeader class="p-4 border-b"/>
    </StrawberryAccordion>
    <StrawberryAccordion class="p-4">
        <StrawberryAccordionHeader class="p-4 last-child:border-b"/>
    </StrawberryAccordion>
</div>
    <StrawberryCheckbox />
    <StrawberryRadio />
    <StrawberrySelect />
    <StrawberrySwitch />
    <StrawberryMenu />
</div>
</template>

<style>
.wrapper{
    padding: 50px
}
</style>