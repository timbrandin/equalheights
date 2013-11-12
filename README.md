## Equalheights

A better and improved equalheights script for floating elements.
NOTICE! This is not a complete solution yet, just copy the code and use on your site for now,
tweet about it and I'd be happy! // timbrandin

### How to use:

```js
equalheight('.equal-height > *');
```

#### And with Drupal for example

```js
Drupal.behaviors.equalheight = {
  attach: function(context) {
    attachEqualHeight('.equal-height > *');
  }
}

function attachEqualHeight(selector) {
  $(window).bind({
    'load': function() {
      equalheight(selector);
    },
    'resize': function() {
      equalheight(selector);
    }
  });
  $(document).bind({
    'ajaxComplete': function() {
      equalheight(selector);
    }
  });
}
```

### How it works:

1. Look for rows (compare the combined width of some elements until it goes beyond the container's width, then we have discovered our row).
2. At the same time check for the heighest outer height (including margins, paddings and borders) on the content of each element.
One issue with measuring the height of an element, one can't have the height set on it already, other scripts solved this by setting the height to "auto". But that makes all the elements jump around, so to solve this I wrapped the content of each element with a div.mp that I can measure on without any interfering css rules.
3. For each row set the min height found for each row

#### Before .js:
Notice that my structure looks like this before use of the script.
```html
<div class="equal-height">
  <div class="element">
    <div class="content-container">
      ... content
    </div>
  </div>
  ... more .elements
</div>
```

#### After .js:
And after use of the script.
```html
<div class="equal-height">
  <div class="element">
    <div class="content-container" style="min-height: 102px">
      <div class="mp">
        ... content
      </div>
    </div>
  </div>
  ... more .elements
</div>
```
