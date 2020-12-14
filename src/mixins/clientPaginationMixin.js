import Fuse from 'fuse.js'

export default {
  data () {
    return {
      searchQuery: '',
      resultData: [],
      fuseSearch: null
    }
  },
  mounted () {
    this.resultData = this.searchData

    // Fuse search initialization.
    this.fuseSearch = new Fuse(this.searchData, {
      keys: this.propsToSearch,
      threshold: 0.3
    })
  },
  watch: {
    searchQuery (value) {
      let result = this.searchData

      if (value !== '') {
        result = this.fuseSearch.search(this.searchQuery).map(o => o.item)
      }

      this.resultData = result
    }
  },
  methods: {
    refreshView (data) {
      let result = this.searchData = data

      this.fuseSearch.setCollection(result)

      if (this.searchQuery !== '') {
        result = this.fuseSearch.search(this.searchQuery).map(o => o.item)
      }

      this.resultData = result
    }
  }
}
