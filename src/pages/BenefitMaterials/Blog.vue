<template>
  <div>
    <div class="blog">
      <div class="content">
        <h2>Блог и статьи</h2>
        <a-skeleton :active="true" :paragraph="{ rows: 20 }" :loading="loading">
          <a-table :columns="columns" :data-source="data" :scroll="{ x: 1300, y: 1000 }">
            <template #bodyCell="{ column }">
              <template v-if="column.key === 'operation'">
                <a>action</a>
              </template>
            </template>
          </a-table>
        </a-skeleton>
      </div>
    </div>
  </div>

</template>
<script lang="ts">
import {defineComponent, ref, onMounted} from 'vue';

export default defineComponent({
  components: {},
  setup() {
    const loading = ref<boolean>(true);
    const columns = [
      {title: 'Full Name', width: 100, dataIndex: 'name', key: 'name',},
      {title: 'Age', width: 100, dataIndex: 'age', key: 'age',},
      {title: 'Column 1', dataIndex: 'address', key: '1'},
      {title: 'Column 2', dataIndex: 'address', key: '2'},
      {title: 'Column 3', dataIndex: 'address', key: '3'},
    ];

    interface DataItem {
      key: string;
      name: string;
      age: number;
      address: string;
    }

    const data: DataItem[] = [
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York Park',
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 40,
        address: 'London Park',
      },
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York Park',
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 40,
        address: 'London Park',
      },
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York Park',
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 40,
        address: 'London Park',
      },
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York Park',
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 40,
        address: 'London Park',
      },
    ];
    onMounted(() => {
      setTimeout(() => {
        loading.value = false
      }, 1000)
    })
    return {data, columns, loading}

  },


});
</script>

