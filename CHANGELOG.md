# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [1.0.5](https://github.com/dsherret/conditional-type-checks/compare/v1.0.4...v1.0.5) (2019-12-04)


### Refactoring

* Improve `isAny` type ([dd689d4](https://github.com/dsherret/conditional-type-checks/commit/dd689d4)), closes [#10](https://github.com/dsherret/conditional-type-checks/issues/10) - Thanks [@smmoosavi](https://github.com/smmoosavi)!



### [1.0.4](https://github.com/dsherret/conditional-type-checks/compare/v1.0.3...v1.0.4) (2019-11-05)


### Bug Fixes

* IsExact - Fix property with unknown in one object type and any type in other. ([cf7440a](https://github.com/dsherret/conditional-type-checks/commit/cf7440a))



### [1.0.3](https://github.com/dsherret/conditional-type-checks/compare/v1.0.1...v1.0.3) (2019-11-05)


### Bug Fixes

* [#8](https://github.com/dsherret/conditional-type-checks/issues/8), [#7](https://github.com/dsherret/conditional-type-checks/issues/7) - Fix IsExact not looking at if an object type had optional or `any` property types. ([c17a799](https://github.com/dsherret/conditional-type-checks/commit/c17a799))



<a name="1.0.1"></a>
# [1.0.1](https://github.com/dsherret/conditional-type-checks/compare/v1.0.0...v1.0.1) (2019-05-11)


### Bug Fixes

* `IsAny` was incorrectly returning `boolean` in certain scenarios. ([c99b6f5](https://github.com/dsherret/conditional-type-checks/commit/c99b6f5))

<a name="1.0.0"></a>
# [1.0.0](https://github.com/dsherret/conditional-type-checks/compare/v0.7.0...v1.0.0) (2019-02-23)


### Code Refactoring

* Remove deprecated verbose type names (ex. `IsNeverType` -> `IsNever`). ([6ff3df7](https://github.com/dsherret/conditional-type-checks/commit/6ff3df7))


### BREAKING CHANGES

* The -`Type` prefixes on the type checks were removed.



<a name="0.7.0"></a>
# [0.7.0](https://github.com/dsherret/conditional-type-checks/compare/v0.6.0...v0.7.0) (2019-02-23)


### Bug Fixes

* `Has<T, U>` handles `any` type. ([b6edabd](https://github.com/dsherret/conditional-type-checks/commit/b6edabd))
* `IsExact` handles the `any` type. ([f12f6f2](https://github.com/dsherret/conditional-type-checks/commit/f12f6f2))


### Features

* Add `IsAny` ([793ed47](https://github.com/dsherret/conditional-type-checks/commit/793ed47))
* Add `IsUnknown<T>` ([e298b4e](https://github.com/dsherret/conditional-type-checks/commit/e298b4e))
* Remove "Type" suffix on all types. ([185cf38](https://github.com/dsherret/conditional-type-checks/commit/185cf38))



<a name="0.6.0"></a>
# 0.6.0 (2019-02-02)


### Features

* Add `Assert` type. ([4ad5083](https://github.com/dsherret/conditional-type-checks/commit/4ad5083))
