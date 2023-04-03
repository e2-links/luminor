[![Lint](https://github.com/telia-company/team-links-poc/actions/workflows/lint.yaml/badge.svg)](https://github.com/telia-company/team-links-poc/actions/workflows/lint.yaml)
# Team Links POC

### <b>[Demo page](https://miniature-potato-a5e43507.pages.github.io/)</b>

---

## Documentation

* [Button](/documentation/button.md)
* [Dropdown](/documentation/dropdown.md)
* [Icon](/documentation/icon.md)
* [Image button](/documentation/image-button.md)
* [Modal](/documentation/modal.md)

<br>

---

## How to do changes?
1. Git pull master
2. Do the changes in code 
3. Bump version to next one `APP_VERSION`
4. Open PR to master
5. Create release tag from master branch
6. Delete your feature branch

<br>

---

## Simple UI elements:
<b>Button:</b>
``` html
<button class="btn btn-info"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="GitHub enterprise"
        onclick="openTab(GITHUB)">
    Private
</button>
```

---

<b>Line Separator:</b>
``` html
<div class="line my-3"></div>
```

---

<b>Image Button:</b>
``` html
<div class="d-flex flex-column">
    <input type="image"
        id="figma-link"
        src="./assets/figma-logo.svg"
        onclick="openTab(FIGMA)"
        alt="Figma"
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title="Figma">
</div>
```

<br>

---

## Dependencies

* [Bootstrap](https://getbootstrap.com/docs/5.2/components/) | styles
* [JQuery](https://api.jquery.com/) | functions
* [Font Awesome](https://fontawesome.com/v5/search) | icons

<br>

---

<br>

<small>[About Dum6o](https://github.com/Dum6o)</small>  
&copy; [Telia Company](https://telia.se)
