bluetooth.start_uart_service()

def on_forever():
    bluetooth.uart_write_string("你好")
basic.forever(on_forever)
