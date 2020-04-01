<template>
  <div>
    <h1>{{$page.content.title }}</h1>
    <VueRemarkContent />
  </div>
</template>

<page-query>
  query Content($id: ID!) {
    content(id: $id) {
      title
    }
  }
</page-query>

<script>
export default {
  
}
</script>