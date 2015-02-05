def Account(balance):
    def call():
        return call.balance
    call.balance = balance
    def increase(amount):
        call.balance += amount
        call.lastamount = amount
        return call.balance
    def call.last():
        return call.lastamount
    def increase_and_print(amount):
        increase(amount)
        print call.balance
    call.inc = increase
    call.incp = increase_and_print
    return call

