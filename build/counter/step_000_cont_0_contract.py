import smartpy as sp

class Contract(sp.Contract):
  def __init__(self):
    self.init_type(sp.TRecord(stored_value = sp.TInt).layout("stored_value"))
    self.init(stored_value = 0)

  @sp.entry_point
  def decrement(self, params):
    self.data.stored_value -= params.value

  @sp.entry_point
  def increment(self, params):
    self.data.stored_value += params.value