# Image button

## Descripiton
Main style framework is [Bootstrap](https://getbootstrap.com/docs/5.2).  
Some button styles is overwritten in [components.css](./../src/styles/components.css) file by Telia digital design guidence.

---

## Example

```html
<input type="image"
        id="jira-link"
        src="./assets/jira_logo.png"
        onclick="openTab(JIRA)"
        alt="Jira Image Link">
```

#### Required fields:
* **type** - "image"
* **src** - place where image exist. Could be https link or link to the foder
* **alt** - description    

#### Optional:
* **id** - if need to find element by id
* **onclick** (or other event) - to start some action on click/hover/blur/focus/etc.
* **data-bs-toggle="tooltip"** - show tooltip on image hover
* **title** - tooltip content

#### Result:
<img src="./assets/image-button.PNG" alt="Jira image button">

---

**Check also:**
* [Button](button.md)
* [Icon](icon.md)

---

<br>
<br>

&copy; 2023 Nebula Team, [Telia Company](https://telia.se)
