import smartpy as sp

tstorage = sp.TRecord(stored_value = sp.TInt).layout("stored_value")
tparameter = sp.TVariant(decrement = sp.TRecord(value = sp.TInt).layout("value"), increment = sp.TRecord(value = sp.TInt).layout("value")).layout(("decrement", "increment"))
tglobals = { }
tviews = { }
