/**
 * @flow
 * @relayHash f184e098b9f2481bdf51d03d8749cf19
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type ProjectPageQueryResponse = {|
  +viewer: {| |};
|};
*/


/*
query ProjectPageQuery {
  viewer {
    ...ProjectData_viewer
    id
  }
}

fragment ProjectData_viewer on Viewer {
  allProjects(last: 100, orderBy: id_ASC) {
    edges {
      node {
        ...Project_project
        id
      }
    }
  }
}

fragment Project_project on Project {
  id
  canonicalName
  resources {
    edges {
      node {
        id
        type
        name
        url
      }
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ProjectPageQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ProjectData_viewer",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "ProjectPageQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "ProjectPageQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "type": "Viewer",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "last",
                    "value": 100,
                    "type": "Int"
                  },
                  {
                    "kind": "Literal",
                    "name": "orderBy",
                    "value": "id_ASC",
                    "type": "ProjectOrderBy"
                  }
                ],
                "concreteType": "ProjectConnection",
                "name": "allProjects",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "ProjectEdge",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "Project",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "id",
                            "storageKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "type": "Project",
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "canonicalName",
                                "storageKey": null
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "args": null,
                                "concreteType": "ResourceConnection",
                                "name": "resources",
                                "plural": false,
                                "selections": [
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "ResourceEdge",
                                    "name": "edges",
                                    "plural": true,
                                    "selections": [
                                      {
                                        "kind": "LinkedField",
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "Resource",
                                        "name": "node",
                                        "plural": false,
                                        "selections": [
                                          {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "args": null,
                                            "name": "id",
                                            "storageKey": null
                                          },
                                          {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "args": null,
                                            "name": "type",
                                            "storageKey": null
                                          },
                                          {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "args": null,
                                            "name": "name",
                                            "storageKey": null
                                          },
                                          {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "args": null,
                                            "name": "url",
                                            "storageKey": null
                                          }
                                        ],
                                        "storageKey": null
                                      }
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              }
                            ]
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "allProjects{\"last\":100,\"orderBy\":\"id_ASC\"}"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query ProjectPageQuery {\n  viewer {\n    ...ProjectData_viewer\n    id\n  }\n}\n\nfragment ProjectData_viewer on Viewer {\n  allProjects(last: 100, orderBy: id_ASC) {\n    edges {\n      node {\n        ...Project_project\n        id\n      }\n    }\n  }\n}\n\nfragment Project_project on Project {\n  id\n  canonicalName\n  resources {\n    edges {\n      node {\n        id\n        type\n        name\n        url\n      }\n    }\n  }\n}\n"
};

module.exports = batch;
