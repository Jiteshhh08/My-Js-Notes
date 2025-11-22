// 1.innerHTML: returns all html nodes 
// 2.textContent : returns all text content
// 3.innerText : gives the text in the selected node
// 4.querySelector
// 5.querySelectorAll
// 6.getAttribute
// 7.setAttribute

// Important discussion about NodeList. A nodelist is a collection of document nodes which includes text nodes , attribute nodes and element nodes. A line break is also counted in nodelist but only first one. All subsequent line breaks are ignored by browser


/*
1. Selecting Elements by ID

document.getElementById('title')

Returns a single element with the given ID.

Fastest selector because IDs are unique.

.id → returns the element’s id.

.className → returns the element’s class (as a string).

Example usage:

Change styles with .style (background color, padding, borders, etc.).

✅ Tip: Only use IDs for elements that are truly unique on the page.

🔹 2. Selecting Elements by Class

document.getElementsByClassName('heading')

Returns a live HTMLCollection of all elements with that class.

To work with them like an array, convert using Array.from().

Once converted, you can loop (forEach) and apply changes (e.g., text color).

✅ Tip: Use this when many elements share the same style or behavior.

🔹 3. Query Selector(s)

document.querySelector(selector)

Returns the first match for the given CSS selector.

document.querySelectorAll(selector)

Returns a NodeList of all matches. Supports forEach() directly.

Selectors can be:

Tag ('h1')

ID ('#id')

Class ('.className')

Attributes ('input[type="password"]')

Pseudo-classes ('p:first-child').

Example:

Select <ul> and then the first <li> inside it.

Change its background color, padding, and text.

✅ Tip: Use querySelectorAll for multiple matches — it’s more flexible than getElementsByClassName.

🔹 4. Attributes

.getAttribute(attrName) → reads an attribute.

.setAttribute(attrName, value) → sets/replaces an attribute.

Examples:

Get element’s id or class.

Add/overwrite a class with setAttribute('class', 'test heading').

✅ Tip: Be careful — setAttribute overwrites existing values. Use .classList.add() if you just want to add.

🔹 5. Content Manipulation

.innerHTML → returns/sets HTML inside the element (renders HTML tags).

.innerText → returns/sets visible text (respects CSS).

.textContent → returns/sets all text, even hidden.

Example:

element.innerHTML = "<h1>Hello</h1>" inserts HTML.

element.innerText = "Hello" inserts plain text.

✅ Tip: Prefer textContent or innerText when inserting user input → safer against XSS attacks.

🔹 6. HTMLCollection vs NodeList

HTMLCollection

Returned by getElementsByClassName, children, etc.

Live → updates automatically if DOM changes.

Not directly iterable with forEach.

NodeList

Returned by querySelectorAll, childNodes, etc.

Static → does not update after DOM changes.

Iterable with forEach.

🔹 7. DOM Traversal

parent.children → HTMLCollection of child elements.

parent.firstElementChild / parent.lastElementChild → first/last child.

element.parentElement → parent node.

element.nextElementSibling → next element on same level.

parent.childNodes → includes text nodes (like whitespace).

✅ Tip: Use .children if you only want elements, .childNodes if you want everything.

🔹 8. Creating Elements

document.createElement('div') → creates an element in memory.

Set properties:

.className, .id

.setAttribute(key, value)

.innerText or .textContent

Append to DOM:

.appendChild(newElement) → adds it to the end.

Append to specific parent (e.g., document.body).

✅ Tip: Create → Configure → Append (always follow this order).

🔹 9. Editing / Replacing Elements

Replace Content:

.innerHTML = "new content" → replaces inside.

.outerHTML = "<li>TypeScript</li>" → replaces the whole element.

Replace Node:

.replaceWith(newElement) → swaps element.

Remove Node:

.remove() → deletes element.

🔹 10. Example: Adding List Items

Function addLanguage("Python"):

Create new <li>.

Insert text (innerHTML or createTextNode).

Append to <ul class="language">.

✅ Best Practice: Use createTextNode for plain text — avoids accidentally inserting HTML.

⚡ Key Takeaways

Selection: IDs (getElementById), Classes (getElementsByClassName), or CSS selectors (querySelector, querySelectorAll).

Attributes: Use getAttribute and setAttribute (careful with overwriting).

Content: innerHTML (HTML), innerText (visible), textContent (all text).

Traversal: Parents, children, siblings → useful for navigation.

Creating/Editing: createElement, appendChild, replaceWith, remove.

Collections: HTMLCollection is live, NodeList is static.

*/