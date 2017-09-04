import tensorflow as tf

with tf.name_scope("input1"):
    input1 = tf.constant([1.0, 2.0,3.0], name="input1")

with tf.name_scope("input2"):
    input2 = tf.Variable(tf.random_uniform([3], name="input2"))


output1=tf.add_n([input1, input2], name="add")

#Generate log writer, and writer it to lot
writer = tf.summary.FileWriter("/tmp/tensorflow/e2", tf.get_default_graph())
writer.close()
