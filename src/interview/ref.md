# Ref

- refs provide a way to access DOM nodes or React elements created in the render method
- là 1 đối tượng tham chiếu đến 1 biến, 1 component giữ cho giá trị của nó không thay đổi giữa các lần render và truy xuất các giá trị đó thông qua key current
- ref change don't make component re-render

- use when
  - managing focus, text selection, or media playback
  - triggering imperative animations
  - integrating with third-party DOM libraries

# ForwardRef

- use when ref component
