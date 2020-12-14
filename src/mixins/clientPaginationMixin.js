import Fuse from "fuse.js";
import { filter, includes } from "lodash";

export default {
  computed: {
    /***
     * Returns a page from the searched data or the whole data. Search is performed in the watch section below
     */
    queriedData() {
      let result = this.tableData;
      if (this.searchedData.length > 0) {
        result = this.searchedData;
      } else if (this.filteredData.length > 0) {
        result = this.filteredData;
      } else {
        if (this.searchQuery) {
          result = [];
        }
      }
      return result.slice(this.from, this.to);
    },
    to() {
      let highBound = this.from + this.pagination.perPage;
      if (this.total < highBound) {
        highBound = this.total;
      }
      return highBound;
    },
    from() {
      return this.pagination.perPage * (this.pagination.currentPage - 1);
    },
    total() {
      return this.searchedData.length > 0
        ? this.searchedData.length
        : this.tableData.length;
    }
  },
  data() {
    return {
      pagination: {
        perPage: 12,
        currentPage: 1,
        perPageOptions: [6, 12, 24, 48],
        total: 0
      },
      searchQuery: "",
      searchedData: [],
      selectedFilter: [],
      filteredData: [],
      fuseSearch: null
    };
  },
  mounted() {
    // Fuse search initialization.
    this.fuseSearch = new Fuse(this.tableData, {
      keys: ["name", "category", "gender", "size"],
      threshold: 0.3
    });
  },
  watch: {
    searchQuery(value) {
      let result = this.tableData;

      if (value !== "") {
        result = this.fuseSearch.search(value).map(o => o.item);

        this.searchedData = result;
      } else {
        result = this.filteredData.length < 0 ? result : [];
      }

      this.searchedData = result;
    },
    selectedFilter(value) {
      let result = this.tableData;

      if (value !== []) {
        result = filter(this.tableData, this.filterProducts);

        this.fuseSearch.setCollection(result);
      } else {
        this.fuseSearch.setCollection(this.tableData);
      }

      this.filteredData = result;
    }
  },
  methods: {
    filterProducts(product) {
      let result = false;

      if (this.selectedFilter) {
        for (let i = 0; i < this.selectedFilter.length; i++) {
          if (includes(product, this.selectedFilter[i])) {
            result = true;
            break;
          }
        }
      }

      return result;
    },
    sortChange({ prop, order }) {
      if (prop) {
        this.tableData.sort((a, b) => {
          let aVal = a[prop];
          let bVal = b[prop];
          if (order === "ascending") {
            return aVal > bVal ? 1 : -1;
          }
          return bVal - aVal ? 1 : -1;
        });
      } else {
        this.tableData.sort((a, b) => {
          return a.id - b.id;
        });
      }
    }
  }
};
