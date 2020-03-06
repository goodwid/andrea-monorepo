# Conventions and Idioms

Use the following conventions for your code...

## Variable naming

### UI-related names are positive

```diff
- {!dontShowBtn && <MyButton />}
+ {shouldShowBtn && <MyButton />}
```

### UI-related Booleans are prefixed

```diff
- {modalOpen && <MyModal /> }
+ {isModalOpen && <MyModal />}
```

### Returned variables should *almost* never be called "data"

```diff
- query.on('value', data => {
-   this.userName = data.val().name;
- }
+ query.on('value', userSnapshot => {
+   const user = userSnapshot.val();
+   this.userName = user.name;
+ }
```

## CSS

### Use `rem` by default, use `em` only with a specific cause

## Function naming

### If it does a thing, name it with a verb (not a noun)

```diff
- nextQuestion(prevIndex) {
+ incrementQuestionIndex(prevIndex) {
```

## Imports

### Imports should be absolute

```diff
- import foo from '../../foo';
+ import foo from 'components/foo';
```
