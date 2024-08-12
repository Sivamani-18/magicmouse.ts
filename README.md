# MagicMouse.ts

[![npm version](https://img.shields.io/npm/v/magicmouse.ts.svg?style=flat)](https://www.npmjs.com/package/magicmouse.ts)
[![npm downloads](https://img.shields.io/npm/dt/magicmouse.ts.svg?style=flat)](https://www.npmjs.com/package/magicmouse.ts)
[![npm license](https://img.shields.io/npm/l/magicmouse.ts.svg?style=flat)](https://www.npmjs.com/package/magicmouse.ts)
[![npm bundle size](https://img.shields.io/bundlephobia/min/magicmouse.ts.svg)](https://www.npmjs.com/package/magicmouse.ts)
[![GitHub stars](https://img.shields.io/github/stars/Sivamani-18/3DTilt.svg?style=social)](https://github.com/Sivamani-18/magicmouse.ts/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Sivamani-18/3DTilt.svg?style=social)](https://github.com/Sivamani-18/magicmouse.ts/network/members)

A customizable magic mouse cursor component for React, built with TypeScript and styled-components. Perfect for adding an interactive and dynamic cursor effect to your modern React, Next.js, or Vite projects.

![CPT2408111943-1293x601](https://github.com/user-attachments/assets/3a9d795a-f850-4348-bab4-4d88b1167a5e)

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

### Use Cases for `magicmouse.ts`

Here are a few scenarios where `magicmouse.ts` can enhance your web applications:

1. **Landing Pages:** Create an interactive experience on your landing page by using a custom cursor that aligns with your brand.
2. **Portfolios:** Make your portfolio stand out with a unique cursor that adds a touch of professionalism and creativity.
3. **E-Commerce Sites:** Use a custom cursor to highlight product details and improve user engagement.


## Contributing

Contributions are welcome! If you find any issues or have feature requests, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Author

**Sivamani-18**

- [GitHub](https://github.com/Sivamani-18)
