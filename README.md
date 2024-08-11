# magicmouse.ts

![npm](https://img.shields.io/npm/v/magicmouse.ts) ![license](https://img.shields.io/npm/l/magicmouse.ts) ![npm downloads](https://img.shields.io/npm/dw/magicmouse.ts)

A customizable magic mouse cursor component for React, built with TypeScript and styled-components. Perfect for adding an interactive and dynamic cursor effect to your modern React, Next.js, or Vite projects.

## Features

- **Customizable Cursor Color:** Easily change the cursor color via a prop.
- **Toggle Cursor Effect:** Enable or disable the cursor effect with a simple prop.
- **Styled Components:** Fully styled with styled-components, making it easy to customize.

## Installation

To install the `magicmouse.ts` library, use npm:

```bash
npm install magicmouse.ts
```

## Usage

Here's how you can use the `MagicMouse` component in your React project:

```tsx
import React from 'react';
import { MagicMouse } from 'magicmouse.ts';

const App: React.FC = () => {
  return (
    <MagicMouse color="#00f" MagicMouseOff={false}>
      <div className="App">
        <h1>Custom Magic Mouse</h1>
        <button>Hover me</button>
        <a href="#">Hover over this link</a>
      </div>
    </MagicMouse>
  );
};

export default App;
```

## Props

| Prop Name       | Type      | Default Value | Description                                             |
| --------------- | --------- | ------------- | ------------------------------------------------------- |
| `color`         | `string`  | `#ff451b`     | Sets the color of the custom cursor.                    |
| `MagicMouseOff` | `boolean` | `true`        | Toggles the custom cursor effect on (`true`) or off (`false`). |



In this example:
- The cursor color is set to `#00f` (blue).
- The custom cursor effect is enabled by setting `MagicMouseOff` to `false`.

## Compatibility

`magicmouse.ts` is compatible with:

- **React** (version 16.8 and above)
- **Next.js** (version 10 and above)
- **Vite** (version 2 and above)

## Contributing

Contributions are welcome! If you find any issues or have feature requests, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Author

**Sivamani-18**

- [GitHub](https://github.com/Sivamani-18)