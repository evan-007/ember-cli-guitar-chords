# Ember-cli-guitar-chords

A simple ember component wrapper for (ChordsJS)[https://github.com/acspike/ChordJS].

Turns this:

```html
   {{guitar-chords name='C' positions='x32010' fingers='-32010' size=3}}
```

into this:

image goes here

## Using with an Ember CLI project

`npm install --save ember-cli-guitar-chords`

Then you can use the `{{guitar-chords}}` component.

The component takes 4 attributes: name, positions, fingers, and size.
The defaults are an open D chord:

```js
name: 'D',
positions: 'xx0232',
fingers: '---132',
size: '3'
```

## Contributing

Do it!

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
