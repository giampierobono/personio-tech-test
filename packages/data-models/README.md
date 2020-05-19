#@personio/data-models

This packages contains all interfaces, enums and configs shared with all other packages. 

##Configs
| Name                     | Type                              | Description                                                  |
| :----------------------- | --------------------------------- | ------------------------------------------------------------ |
| `SortBySelectBoxLabelsConfig` | `{[key: string]: { config: SortCandidatesConfigModel; label: string };}` | Configuration for sortBy selectbox. It was a way to store selectbox labels and sort config in one single place |

##Enums
| Name                 | Description                 |
|----------------------|-----------------------------|
| CandidatesSortByEnum | Available sorting by values |

##Models
| Name                        | Description                                                  |
|-----------------------------|--------------------------------------------------------------|
| FilterCandidatesConfigModel | Described the model of the filters used to filter candidates |
| SortCandidatesConfigModel   | Describe the model of the sort by config                     |