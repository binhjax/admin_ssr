---
title:
  en-US: Exception
  zh-CN: Exception
subtitle: Exception
cols: 1
order: 5
---

The abnormal page is used to give feedback on the specific abnormal state of the page. Usually, it contains an explanation of the error state, and provides suggestions or actions to the user to prevent the user from feeling lost and confused.

## API

| Parameters | Description | Type | Default Value |
|-------------|----------------------------------- -------|-------------|-------|
| type | Page type, if configured, it comes with the default `title`, `desc`, `img` of the corresponding type. This default setting can be overwritten by `title`, `desc`, `img` | Enum {'403 ', '404', '500'} |-|
| title | Title | ReactNode |-|
| desc | Supplemental description | ReactNode |-|
| img | Background image address | string |-|
| actions | Suggested actions, the default "Back to Home" button does not take effect when configuring this property | ReactNode |-|
| linkElement | The element that defines the link, the default is `a` | string\|ReactElement |-|