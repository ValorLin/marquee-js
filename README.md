DEMO
### html ###
```html
<div class="small-container">
    <p>This is a looooooooooooooooooooooooong text without marquee.</p>

    <p id="marquee_paragraph">And this is a looooooooooooooooooooooooong text with marquee.</p>
</div>
```

### javascript ###

```js
var marquee_paragraph = document.getElementById('marquee_paragraph');
new Marquee(marquee_paragraph);
```