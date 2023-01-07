# Buttons

## Descripiton
Main style framework is [Bootstrap](https://getbootstrap.com/docs/5.2/components/buttons/).  
Some button styles is overwritten in [components.css](./../src/styles/components.css) file by Telia digital design guidence.

---

## Simple buttons
### Telia purple
<img src="./assets/telia-btn.png" alt="telia button">

```html
<button class="btn btn-telia">Telia</button>
```

### Green
<img src="./assets/green-btn.png" alt="green button">

```html
<button class="btn btn-success">Green</button>
```

### Yellow
<img src="./assets/yellow-btn.png" alt="yellow button">

```html
<button class="btn btn-warning">Yellow</button>
```

### Red
<img src="./assets/red-btn.png" alt="red button">

```html
<button class="btn btn-danger">Red</button>
```

### Light blue
<img src="./assets/blue-btn.png" alt="blue button">

```html
<button class="btn btn-info">Blue</button>
```

### White
<img src="./assets/white-btn.png" alt="white button">

```html
<button class="btn btn-light">White</button>
```

---

## Buttons with icons
Icons is used from [Font Awesome](https://fontawesome.com/v5/search)  
Spacing `m*-*` utilities is from [Bootstrap](https://getbootstrap.com/docs/4.0/utilities/spacing/)

### Left icon
<img src="./assets/icon-btn.png" alt="button with icon">

```html
<button class="btn btn-success text-start">
    <em class="fa-solid fa-user ms-2 me-3"></em>
    <span>Button</span>
</button>
```


### Right icon (transparent)
<img src="./assets/icon-transparent-btn.png" alt="button with transparent icon">

```html
<button class="btn btn-success mb-1 text-end">
    <span>Button</span>
    <em class="fas fa-headset my-auto mx-2" style="opacity: .5;"></em>
</button>
```

---

## Button click
To open link in new tab need to call `openTab('https\://your.link')` function from [utils.js](./../src/js/utils.js)

``` html
<button class="btn btn-warning"
        onclick="openTab('https\://your.link')">
        Button
</button>
```

---

## Button with tooltip
<img src="./assets/tooltip-btn.png" alt="button with transparent icon">

Basic tooltip parameters:  
* `data-bs-toggle="tooltip"` - defines that it has tooltip  
* `data-bs-placement="top"` - where tooltip will be displayed on element `top` | `right` | `bottom` | `left`
* `title="Tooltip text is here"` - tooltip content

Advanced parameters defined in [Bootstrap](https://getbootstrap.com/docs/4.0/components/tooltips/) documentation


```html
<button class="btn btn-success text-start"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Tooltip text is here"
        onclick="openTab('https\://your.link')">
    <em class="fa-solid fa-user ms-2 me-3"></em>
    <span>Button</span>
</button>
```

---

**Check also:**
* [Image button](image-button.md)
* [Icon](icon.md)

---

<br>
<br>

&copy; 2023 Nebula Team, [Telia Company](https://telia.se)
