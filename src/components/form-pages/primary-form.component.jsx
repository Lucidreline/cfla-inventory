import React from "react";
import { Form } from "react-bootstrap";

import "./form.styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import ImageInput from "../image-input/image-input.component";

const PrimaryForm = ({ attributes, setAttributes, incrementFormPage }) => {
  const SleeveRelatedQuestions = () => {
    return (
      <>
        <div className="off-shoulder">
          <Form.Check
            onClick={(e) =>
              setAttributes({ ...attributes, offShoulder: e.target.checked })
            }
            type="switch"
            defaultChecked={attributes.offShoulder}
            id="custom-switch"
            label="Off Shoulder"
          />
        </div>
        <div className="sleeveless">
          <Form.Check
            onClick={(e) =>
              setAttributes({ ...attributes, sleeveless: e.target.checked })
            }
            defaultChecked={attributes.sleeveless}
            type="switch"
            id="custom-switch"
            label="Sleeveless"
          />
        </div>
      </>
    );
  };

  return (
    <div>
      <Form>
        <div className="sides">
          <div className="left">
            <div className="category">
              <Form.Label className="form-label"> Categories </Form.Label>
              <Form.Check
                defaultChecked={attributes.category === "Tops" ? true : false}
                onClick={() =>
                  setAttributes({ ...attributes, category: "Tops" })
                }
                inline
                label="Tops"
                name="category"
                type="radio"
                id={`inline-$radio-1`}
              />
              <Form.Check
                defaultChecked={
                  attributes.category === "Pants/Shorts" ? true : false
                }
                onClick={() =>
                  setAttributes({ ...attributes, category: "Pants/Shorts" })
                }
                inline
                label="Pants/Shorts"
                name="category"
                type="radio"
                id={`inline-$radio-2`}
              />
              <Form.Check
                defaultChecked={
                  attributes.category === "Jackets" ? true : false
                }
                onClick={() =>
                  setAttributes({ ...attributes, category: "Jackets" })
                }
                inline
                name="category"
                label="Jackets (Include cardigans and zipup hoodies)"
                type="radio"
                id={`inline-$radio-3`}
              />
              <Form.Check
                defaultChecked={
                  attributes.category === "Dresses" ? true : false
                }
                onClick={() =>
                  setAttributes({ ...attributes, category: "Dresses" })
                }
                inline
                name="category"
                label="Dresses"
                type="radio"
                id={`inline-$radio-3`}
              />
              <Form.Check
                defaultChecked={attributes.category === "Skirts" ? true : false}
                onClick={() =>
                  setAttributes({ ...attributes, category: "Skirts" })
                }
                inline
                name="category"
                label="Skirts"
                type="radio"
                id={`inline-$radio-3`}
              />
              <Form.Check
                defaultChecked={
                  attributes.category === "Rompers, Jumpsuits, or Overalls"
                    ? true
                    : false
                }
                onClick={() =>
                  setAttributes({
                    ...attributes,
                    category: "Rompers, Jumpsuits, or Overalls",
                  })
                }
                inline
                name="category"
                label="Rompers, Jumpsuits, or Overalls"
                type="radio"
                id={`inline-$radio-3`}
              />
            </div>

            <div className="product-name">
              <Form.Label className="form-label">Product Name</Form.Label>
              <Form.Control
                type="text"
                value={attributes.productName}
                placeholder="Enter Product name"
                onChange={(e) =>
                  setAttributes({ ...attributes, productName: e.target.value })
                }
              />
            </div>

            <Form.Label className="form-label">Product Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={attributes.description}
              placeholder="Enter Product Description"
              onChange={(e) =>
                setAttributes({ ...attributes, description: e.target.value })
              }
            />
            <Form.Check
              onClick={(e) =>
                setAttributes({
                  ...attributes,
                  addMeasurmentsToDescription: e.target.checked,
                })
              }
              defaultChecked={attributes.addMeasurmentsToDescription}
              type="switch"
              id="custom-switch"
              label="Add Measurements/Attributes to Description"
            />

            <Form.Label className="form-label">Care Instructions</Form.Label>
            <Form.Control
              type="text"
              value={attributes.careInstructions}
              placeholder="Example: Wash in cold water only."
              onChange={(e) =>
                setAttributes({
                  ...attributes,
                  careInstructions: e.target.value,
                })
              }
            />

            <Form.Label className="form-label">Ribbon</Form.Label>
            <Form.Control
              type="text"
              value={attributes.ribbon}
              placeholder="Enter Ribbon"
              onChange={(e) =>
                setAttributes({
                  ...attributes,
                  ribbon: e.target.value,
                })
              }
            />

            <Form.Label className="form-label">Price</Form.Label>
            <Form.Control
              type="number"
              value={attributes.price}
              placeholder="Enter Price"
              onChange={(e) =>
                setAttributes({
                  ...attributes,
                  price: e.target.value,
                })
              }
            />

            <div className="sku">
              <Form.Label className="form-label">Stock-Keeping Unit</Form.Label>
              <Form.Control
                type="text"
                value={attributes.sku}
                placeholder="Enter SKU"
                onChange={(e) =>
                  setAttributes({ ...attributes, sku: e.target.value })
                }
              />
            </div>

            <div className="switch-questions">
              <Form.Label>Details</Form.Label>
              {attributes.category === "Tops" ||
              attributes.category === "Dresses" ||
              attributes.category === "Jackets" ||
              attributes.category === "Rompers, Jumpsuits, or Overalls" ? (
                <SleeveRelatedQuestions />
              ) : (
                <></>
              )}

              {(attributes.category === "Pants/Shorts" ||
                attributes.category === "Rompers, Jumpsuits, or Overalls") && (
                <Form.Check
                  onClick={(e) =>
                    setAttributes({
                      ...attributes,
                      areShorts: e.target.checked,
                    })
                  }
                  defaultChecked={attributes.areShorts}
                  type="switch"
                  id="custom-switch"
                  label="Are Shorts?"
                />
              )}

              <Form.Check
                onClick={(e) =>
                  setAttributes({ ...attributes, stretchy: e.target.checked })
                }
                defaultChecked={attributes.stretchy}
                type="switch"
                id="custom-switch"
                label="Stretchy"
              />

              <Form.Check
                onClick={(e) =>
                  setAttributes({ ...attributes, adjustable: e.target.checked })
                }
                defaultChecked={attributes.adjustable}
                type="switch"
                id="custom-switch"
                label="Adjustable"
              />
            </div>

            <div className="colors">
              <Form.Label className="form-label"> Neutral Colors </Form.Label>
              <div className="mb-3">
                <Form.Check
                  defaultChecked={attributes.colors.black ? true : false}
                  onClick={(e) =>
                    setAttributes({
                      ...attributes,
                      colors: {
                        ...attributes.colors,
                        black: e.target.checked,
                      },
                    })
                  }
                  inline
                  label="Black"
                  name="category"
                  type="checkbox"
                />

                <Form.Check
                  defaultChecked={attributes.colors.white ? true : false}
                  onClick={(e) =>
                    setAttributes({
                      ...attributes,
                      colors: {
                        ...attributes.colors,
                        white: e.target.checked,
                      },
                    })
                  }
                  inline
                  label="White"
                  name="category"
                  type="checkbox"
                />
                <Form.Check
                  defaultChecked={attributes.colors.grey ? true : false}
                  onClick={(e) =>
                    setAttributes({
                      ...attributes,
                      colors: {
                        ...attributes.colors,
                        grey: e.target.checked,
                      },
                    })
                  }
                  inline
                  name="category"
                  label="Grey"
                  type="checkbox"
                />
                <Form.Check
                  defaultChecked={attributes.colors.brown ? true : false}
                  onClick={(e) =>
                    setAttributes({
                      ...attributes,
                      colors: {
                        ...attributes.colors,
                        brown: e.target.checked,
                      },
                    })
                  }
                  inline
                  name="category"
                  label="Brown"
                  type="checkbox"
                />
                <Form.Check
                  defaultChecked={attributes.colors.beige ? true : false}
                  onClick={(e) =>
                    setAttributes({
                      ...attributes,
                      colors: {
                        ...attributes.colors,
                        beige: e.target.checked,
                      },
                    })
                  }
                  inline
                  name="category"
                  label="Beige"
                  type="checkbox"
                />
                <Form.Check
                  defaultChecked={attributes.colors.navy ? true : false}
                  onClick={(e) =>
                    setAttributes({
                      ...attributes,
                      colors: {
                        ...attributes.colors,
                        navy: e.target.checked,
                      },
                    })
                  }
                  inline
                  name="category"
                  label="Navy"
                  type="checkbox"
                />
              </div>

              <Form.Label className="form-label"> Standard Colors </Form.Label>
              <div className="mb-3">
                <Form.Check
                  defaultChecked={attributes.colors.pink ? true : false}
                  onClick={(e) =>
                    setAttributes({
                      ...attributes,
                      colors: {
                        ...attributes.colors,
                        pink: e.target.checked,
                      },
                    })
                  }
                  inline
                  label="Pink"
                  name="category"
                  type="checkbox"
                />

                <Form.Check
                  defaultChecked={attributes.colors.red ? true : false}
                  onClick={(e) =>
                    setAttributes({
                      ...attributes,
                      colors: {
                        ...attributes.colors,
                        red: e.target.checked,
                      },
                    })
                  }
                  inline
                  label="Red"
                  name="category"
                  type="checkbox"
                />
                <Form.Check
                  defaultChecked={attributes.colors.orange ? true : false}
                  onClick={(e) =>
                    setAttributes({
                      ...attributes,
                      colors: {
                        ...attributes.colors,
                        orange: e.target.checked,
                      },
                    })
                  }
                  inline
                  name="category"
                  label="Orange"
                  type="checkbox"
                />
                <Form.Check
                  defaultChecked={attributes.colors.yellow ? true : false}
                  onClick={(e) =>
                    setAttributes({
                      ...attributes,
                      colors: {
                        ...attributes.colors,
                        yellow: e.target.checked,
                      },
                    })
                  }
                  inline
                  name="category"
                  label="Yellow"
                  type="checkbox"
                />
                <Form.Check
                  defaultChecked={attributes.colors.green ? true : false}
                  onClick={(e) =>
                    setAttributes({
                      ...attributes,
                      colors: {
                        ...attributes.colors,
                        green: e.target.checked,
                      },
                    })
                  }
                  inline
                  name="category"
                  label="Green"
                  type="checkbox"
                />
                <Form.Check
                  defaultChecked={attributes.colors.turquoise ? true : false}
                  onClick={(e) =>
                    setAttributes({
                      ...attributes,
                      colors: {
                        ...attributes.colors,
                        turquoise: e.target.checked,
                      },
                    })
                  }
                  inline
                  name="category"
                  label="Turquoise"
                  type="checkbox"
                />

                <Form.Check
                  defaultChecked={attributes.colors.blue ? true : false}
                  onClick={(e) =>
                    setAttributes({
                      ...attributes,
                      colors: {
                        ...attributes.colors,
                        blue: e.target.checked,
                      },
                    })
                  }
                  inline
                  name="category"
                  label="Blue"
                  type="checkbox"
                />

                <Form.Check
                  defaultChecked={attributes.colors.purple ? true : false}
                  onClick={(e) =>
                    setAttributes({
                      ...attributes,
                      colors: {
                        ...attributes.colors,
                        purple: e.target.checked,
                      },
                    })
                  }
                  inline
                  name="category"
                  label="Purple"
                  type="checkbox"
                />

                <Form.Check
                  defaultChecked={attributes.colors.maroon ? true : false}
                  onClick={(e) =>
                    setAttributes({
                      ...attributes,
                      colors: {
                        ...attributes.colors,
                        maroon: e.target.checked,
                      },
                    })
                  }
                  inline
                  name="category"
                  label="Maroon"
                  type="checkbox"
                />

                <Form.Check
                  defaultChecked={attributes.colors.metallic ? true : false}
                  onClick={(e) =>
                    setAttributes({
                      ...attributes,
                      colors: {
                        ...attributes.colors,
                        metallic: e.target.checked,
                      },
                    })
                  }
                  inline
                  name="category"
                  label="Metallic"
                  type="checkbox"
                />

                <Form.Check
                  defaultChecked={attributes.colors.neon ? true : false}
                  onClick={(e) =>
                    setAttributes({
                      ...attributes,
                      colors: {
                        ...attributes.colors,
                        neon: e.target.checked,
                      },
                    })
                  }
                  inline
                  name="category"
                  label="Neon"
                  type="checkbox"
                />
              </div>
            </div>

            <div className="size">
              <Form.Label className="form-label">Size</Form.Label>
              <div className="mb-3">
                <Form.Check
                  onClick={(e) =>
                    setAttributes({
                      ...attributes,
                      size: {
                        ...attributes.size,
                        xs: e.target.checked,
                      },
                    })
                  }
                  defaultChecked={attributes.size.xs}
                  inline
                  label="XS"
                  name="size"
                  type="checkbox"
                />

                <Form.Check
                  onClick={(e) =>
                    setAttributes({
                      ...attributes,
                      size: {
                        ...attributes.size,
                        s: e.target.checked,
                      },
                    })
                  }
                  defaultChecked={attributes.size.s}
                  inline
                  label="S"
                  name="size"
                  type="checkbox"
                />

                <Form.Check
                  onClick={(e) =>
                    setAttributes({
                      ...attributes,
                      size: {
                        ...attributes.size,
                        m: e.target.checked,
                      },
                    })
                  }
                  defaultChecked={attributes.size.m}
                  inline
                  label="M"
                  name="size"
                  type="checkbox"
                />

                <Form.Check
                  onClick={(e) =>
                    setAttributes({
                      ...attributes,
                      size: {
                        ...attributes.size,
                        l: e.target.checked,
                      },
                    })
                  }
                  defaultChecked={attributes.size.l}
                  inline
                  label="L"
                  name="size"
                  type="checkbox"
                />

                <Form.Check
                  onClick={(e) =>
                    setAttributes({
                      ...attributes,
                      size: {
                        ...attributes.size,
                        xl: e.target.checked,
                      },
                    })
                  }
                  defaultChecked={attributes.size.xl}
                  inline
                  label="XL"
                  name="size"
                  type="checkbox"
                />

                <Form.Check
                  onClick={(e) =>
                    setAttributes({
                      ...attributes,
                      size: {
                        ...attributes.size,
                        twoX: e.target.checked,
                      },
                    })
                  }
                  defaultChecked={attributes.size.twoX}
                  inline
                  label="2X"
                  name="size"
                  type="checkbox"
                />

                <Form.Check
                  onClick={(e) =>
                    setAttributes({
                      ...attributes,
                      size: {
                        ...attributes.size,
                        threeX: e.target.checked,
                      },
                    })
                  }
                  defaultChecked={attributes.size.threeX}
                  inline
                  label="3X"
                  name="size"
                  type="checkbox"
                />
              </div>
            </div>

            <div className="fit">
              <Form.Label className="form-label">Fit</Form.Label>
              <div className="mb-3">
                <Form.Check
                  defaultChecked={attributes.fit.tightAndStretchy}
                  onClick={(e) =>
                    setAttributes({
                      ...attributes,
                      fit: {
                        ...attributes.fit,
                        tightAndStretchy: e.target.checked,
                      },
                    })
                  }
                  inline
                  label="Tight and Stretchy"
                  name="fit"
                  type="checkbox"
                />

                <Form.Check
                  defaultChecked={attributes.fit.slimTailored}
                  onClick={(e) =>
                    setAttributes({
                      ...attributes,
                      fit: {
                        ...attributes.fit,
                        slimTailored: e.target.checked,
                      },
                    })
                  }
                  inline
                  label="Slim Tailored"
                  name="fit"
                  type="checkbox"
                />

                <Form.Check
                  defaultChecked={attributes.fit.looselyOversized}
                  onClick={(e) =>
                    setAttributes({
                      ...attributes,
                      fit: {
                        ...attributes.fit,
                        looselyOversized: e.target.checked,
                      },
                    })
                  }
                  inline
                  label="Loose Oversized"
                  name="fit"
                  type="checkbox"
                />
              </div>
            </div>

            <div className="fiber">
              <Form.Label className="form-label">Fiber</Form.Label>
              <Form.Control
                type="text"
                placeholder="Fiber Input"
                value={attributes.fiber}
                onChange={(e) =>
                  setAttributes({ ...attributes, fiber: e.target.value })
                }
              />
            </div>

            <Form.Label className="form-label">Image &#127760;</Form.Label>
            <ImageInput attributes={attributes} setAttributes={setAttributes} />
          </div>
          <div className="right">
            <div className="empty"></div>
            <div className="nav-btns">
              <div className="btn-parent">
                <button
                  className="nav-btn"
                  onClick={() => incrementFormPage(1)}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default PrimaryForm;
